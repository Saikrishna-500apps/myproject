
<template>
    <div>
        <h2>Q4: function to check whether input is an array or not</h2>
        <button @click="fun">click</button><br /><br />

    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        export default {
            data(){
                return {
                    given:console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));

                }
            }
        }
    },
})
</script>















function isArray(input){
    return !!input.pop;
}
console.log(isArray('w3resource'));
console.log(isArray([1, 2, 4, 0]));