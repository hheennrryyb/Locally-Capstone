import React from 'react'
import { AboutFeature } from '../components'

function about() {
    return (
        <div>
            <AboutFeature />
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8 mb-20">
                <h5 className="mb-4 mt-8 text-4xl font-extrabold leading-none"> Whats Locally? </h5>
                <p className="mb-3 font-light text-black ">Localize revolutionizing how consumers shop and discover local products in their areas. Our marketplace is centered around giving local sellers an accessible B2C platform to empower entrepreneurs in growing thriving businesses.
                    Business owners can now have a low barrier to entry within the E-commerce world and have all the tools that comes with a modern marketplace. Shopping locally lowers consumer’s carbon footprint, bolsters the local economy, and promotes discovering exciting products from local retailers and makers.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="col-span-2">
                        <p className="mb-3 font-light text-black ">Localize is aiming to shift online consumer outlooks and impower local business owners. The project aims to improve the consumer’s environmental footprint, awareness to local economy, and to more connected and involved in the community. Currently there’s not a marketplace where local business owners can list and advertise their products; but are forced to pursue alternatives such as creating an online store where they don’t have the necessary knowledge, resources and capital to be successful. Many business owners are left without an online presence or many have incomplete stores/websites that don’t reflect their store.</p>
                        <p className="mb-3 font-light text-black ">Recently, with the pandemic having a huge impact on the economy, many local stores were forced to close down due to a heavy decline in sales and less people shopping in person. Many stores are left unable to reopen causing building vacancy, unemployment, and impacting local communities and economies. While local business struggled through the pandemic, online marketplaces like Amazon has had tremendous growth and increased profits. </p>
                    </div>
                    <p className="mb-3 font-light text-black ">The growth of theses giants will further dissolve communities and prevent local business from thriving. Localize can be the platform that empowers business most effected by this, by having both an accessible online marketplace and to have an online presence to bring more customers to their brick-and-mortar stores. </p>
                </div>
                <p className="mb-3 font-light text-black ">The user of localize would be anyone who loves to online shop and find unique items. The marketplace is designed to be seamless to purchase from and also be easy to navigate to physical location for item pickups. Localize will be powerful in SEO optimization to one true marketplace any shopper will need.</p>
                <p className="mb-3 font-light text-black ">Categories that Localize will be focusing on:
                    •	Arts, Crafts, & Sewing
                    •	Baby
                    •	Beauty & Personal Care
                    •	CDs & Vinyl
                    •	Clothing, Shoes and Jewelry
                    •	Collectibles & Fine Art
                    •	Garden & Outdoor
                    •	Health, Household & Baby Care
                    •	Home & Kitchen
                    •	Musical Instruments
                    •	Pet Supplies
                    •	Sports & Outdoors
                    •	Toys & Games
                    Many of these categories can be expended on but there’s an emphasis on either locally handmade goods, local brands and stores. The marketplace selection is vast and covers consumer demand from all aspects.
                </p>


            </div>
        </div>
    )
}

export default about