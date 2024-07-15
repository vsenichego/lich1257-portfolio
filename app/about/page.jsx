import card from '/public/assets/card-large.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center uppercase">
                <div
                    className="relative w-[1192px] h-[745px] bg-cover rounded-[70px] border-t-[10px] border-black"
                    style={{
                        backgroundImage: `url(${card.src})`
                    }}
                >
                    <Link href="/">
                        <Image
                            src="/assets/logo.svg"
                            width={107}
                            height={102}
                            alt="Logo picture"
                            className="absolute top-[30px] left-[45px]"
                        />
                    </Link>
                    <Image
                        src="/assets/avatar.jpg"
                        width={369}
                        height={400}
                        alt="Picture of the author"
                        className="absolute top-[182px] left-[31px]"
                    />
                    <div className="absolute w-[640px] h-auto top-[182px] left-[494px] leading-[40px] bg-black">
                        <h1 className="text-right text-[35px] pr-[10px]">about</h1>
                    </div>
                    <div className="">
                        <div className="flex flex-nowrap items-end text-black text-[25px]">
                            <p className="relative basis-1/2 mt-[650px] left-[310px] text-[30px]  ">documents:</p>
                            <p className="basis-1/4 mr-[105px] mb-[92px] font-bold text-[21px]  ">hello!<br />
                                my name is sofy lich
                                and i would glad<br />
                                to work with you!<br />
                                i am a media artist,
                                and i like to do
                                all kind<br /> of multimedia
                                stuff.<br />
                                the sphere want us<br />
                                to know a lot,
                                so i have skills
                                in many visual
                                directions.
                                please welcome!</p>
                            <p className="basis-1/4 mr-[65px] text-[20px] mb-[140px] font-bold ">graduated from «stroganov russian state
                                university of design and applied arts
                                (book illustration graphics)<br />
                                graduated from moscow music school
                                (stage lighting design)<br />
                                working as freelancer<br />and multimedia developer
                                (in <a href='https://www.gutor.pro/' target="_blank">gutor production</a>)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}