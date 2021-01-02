<script lang="ts">
    import { Button } from "../../../components/atoms";

    export let onIncrease: () => void;
    export let onDecrease: () => void;
    export let onReset: () => void;
</script>

<Button label="+" onClick={onIncrease} />
<Button label="-" onClick={onDecrease} />
<Button label="Reset" onClick={onReset} />
