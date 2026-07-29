<template>
  <div class="subtitle subtitle-typed" :class="{ typing: typeStatus }">
    {{ typeValue }}
  </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: [String, Array],
      default: function () {
        return ["Web Designer", "Developer", "Freelancer"];
      },
    },
  },

  data: function () {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: this.arr || [],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  mounted() {
    this.typeArray = this.arr;
  },
};
</script>

<style>
.header .profile .subtitle {
  font-size: 12px;
}
</style>
