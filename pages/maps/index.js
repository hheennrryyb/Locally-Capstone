import React, { useState, useEffect } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { client } from '../../lib/client'
import { urlFor } from '../../lib/client'
import mapStyles from './mapStyles'
import { MakersBio } from '../../components'
import Link from 'next/link'
import Image from 'next/image'

function Map({ retailerData }) {
    const [selected, setSelected] = useState(null)

    // useEffect(() => {
    //     console.log("selected", selected)
    //     if (selected) {
    //         console.log(selected.slug.current)
    //     }
    // }, [selected])

    return (

        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
            defaultOptions={{ styles: mapStyles }}
        >
            {retailerData.map(retailer => (
                <Marker
                    key={retailer._id}
                    position={{ lat: retailer.location.lat, lng: retailer.location.lng }}
                    onClick={() => {
                        setSelected(retailer)
                    }}
                // icon={{
                //     url:
                // }}
                />
            ))}

            {selected !== null && (
                <InfoWindow
                    position={{ lat: selected.location.lat, lng: selected.location.lng }}
                    onCloseClick={() => {
                        setSelected(null)
                    }}
                >

                    <div className='w-36 flex items-center flex-col'>
                        {/* <Link href={`/retailer/${selected.slug.current}`}> */}
                        <img onClick={() => {
                            window.location = `/retailer/${selected.slug.current}`;
                        }} src={urlFor(selected.image)} className='h-32 w-32 object-cover object-center rounded-full' />
                        {/* </Link> */}

                        <h2 className='text-lg'>{selected.name}</h2>
                        <p>{selected.shortDescription}</p>
                        {/* <MakersBio retailerData={selected} /> */}
                    </div>

                </InfoWindow>
            )}
        </GoogleMap>

    )
}


const WrappedMap = withScriptjs(withGoogleMap(({ retailerData }) => <Map retailerData={retailerData} />))

export default function index({ retailerData }) {

    return (
        <div style={{ width: 'auto', height: '800px' }} className="m-auto">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                retailerData={retailerData}
            />
        </div>
    )
}
export const getServerSideProps = async () => {

    const retailerQuery = `*[_type == 'retailer'] {...,"product": *[_type == 'product' && references(^._id)]}`;
    const retailerData = await client.fetch(retailerQuery);

    return {
        props: { retailerData }
        //Passed to top props
    }
}