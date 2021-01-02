<script lang="ts">
    import { countStore } from "../../../store";
    import { ValueSetter } from "../../../components/molecules";
</script>

<h1>Global count is: {$countStore}!</h1>
<ValueSetter
    onIncrease={() => ($countStore = $countStore + 1)}
    onDecrease={() => ($countStore = $countStore - 1)}
    onReset={() => ($countStore = 0)} />
