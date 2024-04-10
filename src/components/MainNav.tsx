import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

export default function MainNav() {
  const {loginWithRedirect , isAuthenticated} = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated? <UsernameMenu/> : <Button variant={"secondary"} className="font-bold hover:text-orange-500 hover:bg-white border-orange-500 border-2 border-solid"
    onClick={async ()=> await loginWithRedirect()}>Log In</Button>
    }
    </span>
    
  )
}
