<template>
  <textarea
    ref="textarea"
    :model="content"
    @input="adjustTextareaHeight"
    class="resizable-textarea"
    placeholder="Ecris sur moi, vas y"
  ></textarea>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ResizableTextarea",
  props: {
    initialValue: String,
  },
  setup(props) {
    const content = ref(props.initialValue || "");
    const textarea = ref(null);

    const adjustTextareaHeight = () => {
      if (textarea.value) {
        textarea.value.style.height = "auto";
        textarea.value.style.height = textarea.value.scrollHeight + "px";
      }
    };

    return {
      content,
      textarea,
      adjustTextareaHeight,
    };
  },
};
</script>

<style scoped>
.resizable-textarea {
  width: 100%;
  max-width: 90%;
  min-width: 60%;
  min-height: 200px;
}
</style>
