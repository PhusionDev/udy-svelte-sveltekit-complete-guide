<script>

</script>

<style lang="scss">
  button {
    border: none;
    background-color: #ff3e00;
    color: #fff;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: variables.$color;
    }
  }
</style>

<button><slot>Click Me</slot></button>