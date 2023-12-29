import type {Country} from "@/app/page";
import Image from "next/image";
import Link from "next/link";

async function getCountryByName(name:string):Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    return (await response.json())[0];
}
export default async function CountryPage({params: {name},
}: {params: {name:string};
}) {
    const country = await getCountryByName(name)
    return (   
    <section className="flex flex-col container">
        <h1 className="text-5xl text-center font-bold text-gray-800 my-16">{country.translations.por.common}</h1>
        <Link className="flex items-center py-2" href={"/"}>
            <Image src="/arrow-back.svg" alt="icone seta de voltar" width={24} height={24} />
            Voltar</Link>
        <article className="flex justify-between min-w-full p-10 bg-white rounded-xl">
            <section>
                <h2 className="text-xl text-gray-800"> 🏙️ <b>Capital:</b> {country.capital}</h2>
                <h2 className="text-xl text-gray-800"> 🗺️ <b>Continente:</b></h2>
                <h2 className="text-xl text-gray-800"> 👨‍👩‍👧‍👦 <b>População:</b></h2>
                <h2 className="text-xl text-gray-800">🗣️ <b>Línguas faladas</b>:</h2>
            </section>
        </article>
    </section>);
 
    
}