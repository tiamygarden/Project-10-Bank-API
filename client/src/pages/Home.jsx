import MainLayout from "../layouts/MainLayout.jsx"
import iconChat from "../assets/img/icon-chat.png"
import iconMoney from "../assets/img/icon-money.png"
import iconSecurity from "../assets/img/icon-security.png"
import bankTree from "../assets/img/bank-tree.jpeg"
import FeatureItem from "../components/FeatureItem.jsx"

const Home = () => {
  return (
    <MainLayout>
      <div className="h-[400px] flex p-2 bg-center bg-cover relative"
        style={{ backgroundImage: `url(${bankTree})` }}>
        <div className="flex absolute right-8 top-0 bottom-0 items-center">
          <section className="bg-white p-6 w-52"
            aria-description="Promoted Content">
            <p className="font-semibold">No fees.</p>
            <p className="font-semibold">No minimum deposit.</p>
            <p className="font-semibold">High interest rates.</p>
            <p className="text-sm">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
      </div>
      <section aria-description="Features" className="max-w-4xl mx-auto p-4">
        <div className="flex flex-wrap mx-4">
          <FeatureItem
            icon={iconChat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch
            through our 24/7 chat or through a phone call in less than 5
            minutes."
          />

          <FeatureItem
            icon={iconMoney}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest
            rate will be!"
          />

          <FeatureItem
            icon={iconSecurity}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your
            data and money is always safe."
          />
        </div>
      </section>
    </MainLayout>
  )
}

export default Home
