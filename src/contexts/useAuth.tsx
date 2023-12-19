import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/infra";
import { router } from "expo-router";

interface AuthContextProps {
  session: Session | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(null);

  const getSession = async () => {
    const {
      data: { session: authSession },
    } = await supabase.auth.getSession();

    if (!authSession) {
      router.replace("/login/");
    }

    setSession(authSession);
  };

  useEffect(() => {
    getSession();
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, stateSession) => {
      const handleAuthChange = async () => {};
      handleAuthChange();

      if (event === "SIGNED_IN") {
        setSession(stateSession);
      }

      if (event === "SIGNED_OUT") {
        setSession(null);
        router.replace("/login/");
        return;
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
