<script>
    // based on suggestions from:
    // Inclusive Components by Heydon Pickering https://inclusive-components.design/toggle-button/
    // On Designing and Building Toggle Switches by Sara Soueidan https://www.sarasoueidan.com/blog/toggle-switch-design/
    // and this example by Scott O'hara https://codepen.io/scottohara/pen/zLZwNv
    import { getContext }   from "svelte";

    export let label;
    let { animation } = getContext('animation-data');
    export let field;

    const uniqueID = Math.floor(Math.random() * 100);

    function clickThis() {
        let isChecked = $animation[field];
        $animation[field] = !isChecked;
        
    }
    
    $: isChecked = $animation[field];
    
    //<label for="">{label}</label>

</script>

<div class="aa-SliderBox" style="font-size:16px">
    <button
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={`switch-${uniqueID}`}
        on:click={() => clickThis()}
        style="margin-right: .5em"
    />
    <span id={`switch-${uniqueID}`}>{label}</span>
</div>

<style>
    :root {
        --accent-color: rgba(0, 188, 0, 0.5);
        --gray: #ccc;
    }

    /* Slider Design Option */

    .aa-SliderBox {
        display: flex;
        align-items: center;
        font-weight: bold;
    }

    .aa-SliderBox button {
        width: 44px;
        height: 22px;
        position: relative;
        margin: 0 0 0 0.5em;
        background-color: rgba(0, 0, 0, 0.2);
        transition: background-color .3s;
        border: none;
    }

    .aa-SliderBox button::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        top: 1px;
        right: 23px;
        transition: transform 0.3s;
    }

    .aa-SliderBox button[aria-checked="true"] {
        background-color: var(--accent-color);
        transition: background-color .3s;
    }

    .aa-SliderBox button[aria-checked="true"]::after {
        transform: translateX(22px);
        transition: transform 0.3s;
    }

    /* Slider Design Option */
    .aa-SliderBox button {
        border-radius: 21px;
    }

    .aa-SliderBox button::after {
        border-radius: 100%;
    }
    .aa-SliderBox button[aria-checked="true"]::before {
    font-family: "Font Awesome 5 Free";
    font-size: 16px;
    content: "\f00c";
    position:relative;
    bottom: 4px;
    right: 10px;
    color: white;
    font-weight: bold;
  }
  .aa-SliderBox button[aria-checked="false"]::before {
    font-family: "Font Awesome 5 Free";
    font-size: 16px;
    content: "\f00d";
    position:relative;
    bottom: 4px;
    left: 10px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
  }

</style>
