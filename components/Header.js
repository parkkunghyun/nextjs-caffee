import Container from "./Container";
import Link from "next/link"

export default function Header() {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-between py-8 border-b">
                    <p className="text-3xl font-bold"><Link href="/">Caffee</Link></p>
                    <ul className="flex">
                        <li className="mr-4"> 
                            <Link href="/about">소개</Link>
                         </li>
                         <li className="mr-4"> 
                            <Link href="/order">온라인주문</Link>
                         </li>
                         <li className="mr-4"> 
                            <Link href="/sign-in">로그인</Link>
                         </li>

                    </ul>
                </div>
            </Container>
        </div>
    )
}