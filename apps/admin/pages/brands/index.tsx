import { getAllBrands } from "../../service/brands.service"

const BrandsPage = ({brandsData}) => {
    return (
        <div>
            BRANDS PAGE

            {
                brandsData.map(brand => (
                    <div key={brand.id}>
                        {brand.name}
                    </div>
                ))
            }
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const brandsData = await getAllBrands();
  
    // Pass data to the page via props
    return { props: { brandsData } }
  }

export default BrandsPage