<template>
  <div>
    {{val.join(',')}}
  </div>
</template>

<script>
const promise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve( 10 );
  }, 1000);
});

export default {
  name: 'Test',
  async mounted() {
    console.log('mounted');
    const a = [1, 2, 3];
    const b = a.map(item => item + 1);
    const c = await promise();
    b.push(c);
    this.val = b;
    console.log(this.val);
  },
  data() {
    return {
      val: [],
    }
  }
}
</script>

