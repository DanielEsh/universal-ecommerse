import { getAllBrands } from "../../service/brands.service"

const BrandsPage = ({data}) => {
    return (
        <div>
            BRANDS PAGE

            {
                data.map(brand => (
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
    const {data} = await getAllBrands();
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default BrandsPage