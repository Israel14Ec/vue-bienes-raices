import { computed, ref } from 'vue'
import { collection, doc, deleteDoc } from 'firebase/firestore'
import { ref as storageRef, deleteObject } from 'firebase/storage'
import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire'


export default function usePropiedades() {
 
    const alberca = ref(false)

    const storage = useFirebaseStorage()
    const db = useFirestore()
    const propiedadesCollection = useCollection(collection(db, 'propiedades'))

    async function deleteItem (id, urlImage) {
        if(confirm("Deseas eliminar la propiedad?")){
            const docRef = doc(db, 'propiedades', id)
            const imageRef = storageRef(storage, urlImage) //Referencia de la imagen a eliminar

            await Promise.all ([
                deleteDoc(docRef),
                deleteObject(imageRef)
            ])// se ejecuta al mismo tiempo
           
        }
        
    }
    const FilterItems = computed(() => {
        return alberca.value?
            propiedadesCollection.value.filter(propiedad => propiedad.alberca) :
            propiedadesCollection.value
    })

    return {
        propiedadesCollection,
        FilterItems,
        alberca,
        deleteItem

    }
}