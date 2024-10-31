import { ref} from 'vue'

export default function useLocationMap(){

    const zoom = ref(15)
    const center = ref([-0.183054, -78.483988])

    function pin(e){
        console.log("hola")
        console.log(e.target)
        //const marker = e.target.getLatLng()
        //center.value = [marker.lat, marker.lng]
    }

    return {
        zoom,
        center,
        pin
    }
}