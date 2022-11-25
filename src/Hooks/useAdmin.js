import { useEffect, useState } from "react";


const useAdmin = (email) => {
const [isAdmin, setIsAdmin] = useState(false)

  useEffect(()=>{
    if(email){
        fetch(`https://api.github.com/users/admin/${email}`)
        .then(res=>res.json())
        .then((data)=>{
            setIsAdmin(data.isAdmin)
        })
    
}

},[email])
return [isAdmin]
};

export default useAdmin;