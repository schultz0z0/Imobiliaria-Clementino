import BlogCard from '../BlogCard'
import officeImage from '@assets/generated_images/Office_team_environment_df9f6cfa.png'

export default function BlogCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <BlogCard
        id="1"
        image={officeImage}
        title="Como Avaliar o Valor Real de um Imóvel em 2024"
        excerpt="Descubra os principais fatores que influenciam o preço de imóveis no mercado atual e como fazer uma avaliação precisa antes de comprar ou vender."
        category="Dicas de Investimento"
        author="João Silva"
        date="15 Jan 2024"
        readTime="5 min"
      />
    </div>
  )
}
