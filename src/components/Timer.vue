<template>
  <section id="countdown"></section>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    deadline: String,
  },
  mounted() {
    this.initializeClock(this.$props.deadline);
  },
  methods: {
    calculateTimeRemaining(time) {
      const total = Date.parse(time) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor( (total/1000/60) % 60 );
      const hours = Math.floor( (total/(1000*60*60)) % 24 );
      const days = Math.floor( total/(1000*60*60*24) );

      return {
        total,
        days: ("0" + days).slice(-2),
        hours: ("0" + hours).slice(-2),
        minutes: ("0" + minutes).slice(-2),
        seconds: ("0" + seconds).slice(-2)
      };
    },
    initializeClock(time) {
      const element = document.querySelector("#countdown");

      const interval = setInterval(() => {
        const remaining = this.calculateTimeRemaining(time);
        const divider = `<span class="text-gray-600">:</span>`;

        element.innerHTML = `${remaining.days}${divider}${remaining.hours}${divider}${remaining.minutes}${divider}${remaining.seconds}`;

        if (remaining.total <= 0) {
          clearInterval(interval);

          window.location = 'https://www.youtube.com/playstation';
        }
      }, 1000);
    }
  },
}
</script>