import aCard from '/public/assets/acard-test-large.jpg'
import Image from 'next/image'


export default function About() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center uppercase">
                <div
                    className="relative w-[1192px] h-[745px] bg-cover rounded-[70px] border-t-[10px] border-black"
                    style={{
                        backgroundImage: `url(${aCard.src})`
                    }}
                >
                    <Image
                        src="/assets/logo.svg"
                        width={107}
                        height={102}
                        alt="Logo picture"
                        className="absolute top-[30px] left-[45px]"
                    />
                    <Image
                        src="/assets/avatar.jpg"
                        width={369}
                        height={400}
                        alt="Picture of the author"
                        className="absolute top-[182px] left-[31px]"
                    />
                    <div className="absolute w-[640px] h-auto top-[182px] left-[494px] leading-[40px] bg-black">
                        <h1 className="text-right text-[40px] pr-[10px]">about</h1>
                    </div>
                    <div className="">
                        <div className="flex flex-nowrap items-end text-black text-[25px]">
                            <p className="relative basis-1/2 mt-[650px] left-[310px] text-[30px]">documents:</p>
                            <p className="basis-1/4 mr-[105px] mb-[130px] font-bold text-[22px]">hello!
                                my name is sofy lich
                                and i would glad
                                to work with you!<br />
                                i am a media artist,
                                and i like to do
                                all kind of multimedia
                                stuff.<br />
                                the sphere want us
                                to know a lot,
                                so i have skills
                                in many visual
                                directions.
                                please welcome!</p>
                            <p className="basis-1/4 mr-[65px] text-[20px] mb-[70px] font-bold">graduated from federal state
                                budgetary educational institution
                                of higher education «stroganov russian state
                                university of design and applied arts
                                (book illustration graphics)<br />
                                graduated from moscow music school
                                (stage lighting design)<br />
                                working as freelancer and multimedia developer
                                (in gutor production)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



















// export default function About() {
//     return (
//         <>
//             <div className="h-screen w-screen flex items-center justify-center uppercase">
//                 <div
//                     className="relative flex w-[1192px] h-[745px] bg-cover"
//                     style={{
//                         backgroundImage: `url(${aCard.src})`
//                     }}
//                 >
//                     <h1 className="absolute top-[189px] left-[985px] text-[35px]">about</h1>
//                     <div className="absolute w-full h-full flex">
//                         <ul className="flex column justify-center w-full m-auto">
//                             <li className="w-[150px] self-end ml-[150px]" >
//                                 <p>document:</p>
//                             </li>
//                             <li className="w-[250px]">
//                                 <p>hello!
//                                     my name is sofy lich
//                                     and i would glad
//                                     to work with you!
//                                     i am a media artist,
//                                     and i like to do
//                                     all kind of multimedia
//                                     stuff.
//                                     the sphere want us
//                                     to know a lot,
//                                     so i have skills
//                                     in many visual
//                                     directions.
//                                     please welcome!</p>
//                             </li>
//                             <li className="w-[250px] pl-[150px]">
//                                 <p>graduated from federal state
//                                     budgetary educational institution
//                                     of higher education «stroganov russian state
//                                     university of design and applied arts
//                                     (book illustration graphics)
//                                     graduated from moscow music school
//                                     (stage lighting design)
//                                     working as freelancer and multimedia developer
//                                     (in gutor production)</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }