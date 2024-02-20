import { CiImageOn } from "react-icons/ci";

function SkeletonProductCard({ cantSkeleton = 1 }) {
    let listSkeleton = []
    for (let numSkeleton = 0; numSkeleton < cantSkeleton; numSkeleton++) {
        const keyForSkeleton = crypto.randomUUID()
        listSkeleton.push([numSkeleton + 1, keyForSkeleton])

    }
    return (
        <>
            {listSkeleton &&

                listSkeleton.map(skeleton => {
                    const [numSkeleton,keyRenderin] = skeleton
                    return <article key={keyRenderin} className="animate-pulse duration-1000 ease-in-out w-full flex flex-col gap-2 rounded-lg border p-[0.3rem] ">

                        <div className="flex place-content-center place-items-center md:h-[200px] w-full min-w-full max-w-full  rounded-tl-lg rounded-tr-lg  bg-gray-300">
                            <CiImageOn className="w-20 h-20 text-gray-400" />
                        </div>
                        <div className="  flex items-center justify-between  font-bold ">
                            <span className=" w-[80%] h-2 rounded-full border bg-gray-300 "></span>
                            <span className="w-[18%] h-2 rounded-full border bg-gray-300  "></span>
                        </div>
                        <div className="flex flex-col gap-1  h-[100px] overflow-hidden overflow-ellipsis">
                            <div className="w-[95%] h-1   rounded-full border    bg-gray-200"></div>
                            <div className="w-[95%] h-1   rounded-full border   bg-gray-200"></div>
                            <div className="w-[90%] h-1   rounded-full border   bg-gray-200"></div>
                            <div className="w-[88%] h-1   rounded-full border    bg-gray-200"></div>
                            <div className="w-[95%] h-1   rounded-full border    bg-gray-200"></div>
                            <div className="w-[78%] h-1   rounded-full border    bg-gray-200"></div>
                        </div>
                        <div className="flex  justify-end  ">
                            <button className='w-5 h-5 flex place-content-center place-items-center border rounded-full  bg-gray-300'></button>
                        </div>
                    </article>
                })
            }
        </>
    )
}

export default SkeletonProductCard