import { ImageContainer, ProductContainer, ProductDatails } from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
    const { query } = useRouter()

    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDatails>
                <h1> x </h1>
                <span>R$</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellat.
                </p>
                <button>
                    Comprar agora
                </button>
            </ProductDatails>
        </ProductContainer>
    )
}
