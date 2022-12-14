const cleanDataResponse = (data) => {
    let { main_banner, info_boxes } = data.attributes;
    let cleanedMainBanner = cleanMainBannerData(main_banner);
    let cleanedInfoBoxes = cleanInfoBoxesData(info_boxes);
    return {
        id: data.id,
        name: data.name,
        mainBanner: cleanedMainBanner,
        infoBoxes: cleanedInfoBoxes
    }
}

const cleanInfoBoxesData = ({data}) => {
    return data.map((d) => { return { ...d.attributes, id: d.id, image: d.attributes.image.data.attributes } })
}

const cleanMainBannerData = ({data}) => {
    const attributes = data.attributes
    return {
        ...attributes,
        images: attributes.images.map((image) => {  return {...image, image: image.image.data.attributes } })
     }
}

export default cleanDataResponse;