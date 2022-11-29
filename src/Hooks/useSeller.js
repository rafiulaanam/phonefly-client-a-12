import { useEffect, useState } from "react";


const useSeller = (email) => {
const [isSeller, setIsSeller] = useState(false)
const [isSellerLoading, setIsSellerLoading] = useState(true)
const [isRerender, setIsRerender] = useState(false)

  useEffect(()=>{
    if(email){
        fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res=>res.json())
        .then((data)=>{
            setIsSeller(data.isSeller)
            setIsSellerLoading(false)
        })
    
}

},[email,isRerender])
return [isSeller,isSellerLoading,setIsRerender]
};

export default useSeller;