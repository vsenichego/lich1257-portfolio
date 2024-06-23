import aCard from '/public/assets/aCard.png'

export default function About() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center uppercase">
                <div
                    className="relative flex w-[1192px] h-[745px] bg-cover"
                    style={{
                        backgroundImage: `url(${aCard.src})`
                    }}
                >
                    <h1 className="absolute top-[189px] left-[985px] text-[35px]">about</h1>
                    <div className="absolute w-full h-full flex">
                        <ul className="flex column justify-center w-full m-auto">
                            <li className="w-[150px] self-end ml-[150px]" >
                                <p>document:</p>
                            </li>
                            <li className="w-[250px]">
                                <p>hello!
                                    my name is sofy lich
                                    and i would glad
                                    to work with you!
                                    i am a media artist,
                                    and i like to do
                                    all kind of multimedia
                                    stuff.
                                    the sphere want us
                                    to know a lot,
                                    so i have skills
                                    in many visual
                                    directions.
                                    please welcome!</p>
                            </li>
                            <li className="w-[250px] pl-[150px]">
                                <p>graduated from federal state
                                    budgetary educational institution
                                    of higher education «stroganov russian state
                                    university of design and applied arts
                                    (book illustration graphics)
                                    graduated from moscow music school
                                    (stage lighting design)
                                    working as freelancer and multimedia developer
                                    (in gutor production)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}