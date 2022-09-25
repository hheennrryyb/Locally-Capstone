import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { client } from '../../lib/client'
import { urlFor } from '../../lib/client'
import mapStyles from './mapStyles'
import { MakersBio } from '../../components'
import Link from 'next/link'


function Map({ retailerData }) {
    const [selected, setSelected] = useState(null)
    console.log(retailerData)
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

            {selected && (
                <InfoWindow
                    position={{ lat: selected.location.lat, lng: selected.location.lng }}
                    onCloseClick={() => {
                        setSelected(null)
                    }}
                >
                    <div>
                        {/* <img src={urlFor(selected.image)}></img> */}
                        <h2>{selected.name}</h2>
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
    // console.log(retailerData)

    return (
        <div style={{ width: '1200px', height: '800px' }} className="m-auto">
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