const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET

export default (imageRef: string) => {

  if (!imageRef) return ''

	let image = imageRef.replace('image-', '')
	image = image.replace('-png', '.png')
	image = image.replace('-jpg', '.jpg')
	image = image.replace('-svg', '.svg')

	return `https://cdn.sanity.io/images/${projectId}/${dataset}/${image}`
}