<script>
    export let setting = void 0;
</script>

<div class=form-group>
    <label>{setting.name}</label>
    <div class=form-fields>

    </div>
    <p class=notes>
        {setting.hint}
    </p>
</div>

<style>
    .form-group {
        clear: both;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 3px 0;
        align-items: center;
    }

    .form-group:not(:last-child) {
        margin-bottom: 1rem;
    }

    .form-group label {
        line-height: var(--form-field-height);
        flex: 2;
    }

    .form-group .form-fields {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        flex: 3;
        justify-content: flex-end;
        align-items: center;
    }

    .form-group .notes {
        flex: 0 0 100%;
        font-size: var(--font-size-12);
        line-height: var(--line-height-16);
        color: var(--color-text-dark-secondary);
        margin: 3px 0;
        min-height: 1rem;
    }
</style>
