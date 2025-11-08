import PropertyCard from '../PropertyCard'
import familyHome from '@assets/generated_images/Family_home_property_listing_0f996cea.png'

export default function PropertyCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PropertyCard
        id="1"
        image={familyHome}
        title="Casa Moderna em Condomínio Fechado"
        price="R$ 850.000"
        location="Alphaville, São Paulo"
        bedrooms={3}
        bathrooms={2}
        area={180}
        type="venda"
        featured={true}
      />
    </div>
  )
}
