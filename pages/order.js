import { useCallback, useMemo, useState } from "react";
import { BaseLayout } from "../components/BaseLayout";
import k from 'lodash';
import _ from "lodash";

const formatter = Intl.NumberFormat('ko-kr')

const menu = {
    '에스프레소': 2500,
    '아메리카노': 1500,
    '카페라떼': 3000,
    '바닐라라떼': 3500,
    '녹차라떼' : 3900,
    '자바칩 프라푸치노' : 4300
}
const initialValues = {}

k.forEach(menu, (price,key)=> {
    initialValues[key] = 0
})

export  default function Order() {
    const [orderData, setOrderData] = useState(initialValues)
    //const [americano, setAmericano] = useState(0);
    const sum = useMemo(
        ()=>  _.reduce(orderData, (sum,count,key)=> sum + count * menu[key],0), [orderData]
        )
   
        /** orderdata.foreach 해서 count ,key 를 받고 lodash를 이용해서ㅓ    k.find(menu, (item,name)=> key ===name) */
    const remove = useCallback((key)=> {
        setOrderData({
            ...orderData, 
            [key]: orderData[key]-1
        })
    }, [orderData,setOrderData])
    const add = useCallback((key)=> {
        setOrderData({
            ...orderData, 
            [key]: orderData[key] +1
        })
    }, [orderData,setOrderData])
    return (
        <BaseLayout>
            <h1>오더</h1>

            <ul>
                { k.map( menu, (item, key)=> (
                        <li className="flex items-center mb-2">
                             {key} : {formatter.format(item)} 원
                             <button 
                                className="border  p-2 w-8 h-8 flex items-center justify-center ml-4"
                                onClick={()=> remove(key)}
                                >
                                -
                             </button>
                            <span className="mx-4">{orderData[key]}</span>
                            <button onClick={()=> add(key)} className="border  p-2 w-8 h-8 flex items-center justify-center ">
                                +
                             </button>
                        </li>
                    ) ) 
                }
            </ul>
            <hr className="mb-4"></hr>
                합계  : {formatter.format(sum)}
        </BaseLayout>
    )
}