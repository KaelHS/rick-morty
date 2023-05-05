import { createContext, useState, useContext } from 'react';
import { setCookie, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';

interface IFakeAuthContextData {
    signIn: (name: string) => void;
    signOut: () => void;
    isAuthenticated: boolean;
}

interface IFakeAuthProviderProps {
    children: React.ReactNode;
}

export const FakeAuthContext = createContext<IFakeAuthContextData>({} as IFakeAuthContextData);

export const FakeAuthProvider = ({ children }: IFakeAuthProviderProps) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const router = useRouter();

    const signIn = ( name: string ) => {
        try {
            setCookie(null, 'name', name, {
                path: '/',
                maxAge: 30 * 24 * 60 * 60
            });
            setIsAuthenticated(true);
            router.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    const signOut = () => {
        try {
            destroyCookie(null, 'name');
            setIsAuthenticated(false);
            router.push('/');
        } catch(error) {
            console.log(error);
        }

    }
    return (
        <FakeAuthContext.Provider value={{signIn,signOut, isAuthenticated}} >
            {children}
        </FakeAuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(FakeAuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};