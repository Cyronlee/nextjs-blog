import Image from "next/image";

import flower from "../../public/images/flower.jpg"


export default function Pictures() {
    return (<Image
        src={flower}
        alt="Picture of the author"
        placeholder="blur"
        layout="responsive"
    />)
}
