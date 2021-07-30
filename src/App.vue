<template>
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__section">
          <div class="about__background"></div>
          <div class="about__info">
            <text-template></text-template>
            <button-template></button-template>
          </div>
          <img
            class="about__image"
            src="./assets/images/trailer-pulling.png"
            alt="trailer-pulling"
          />
        </div>
        <div class="about__section">
          <div class="services">
            <div class="services__wrapper">
              <service-card
                v-for="card in ServicesItems"
                v-bind:key="card.id"
                v-bind:item="card"
              ></service-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /. about -->
</template>


<script>
import ServiceCard from "@/components/ServiceCard";
import TextTemplate from "@/components/TextTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";

export default {
  name: "App",
  components: {
    "service-card": ServiceCard,
    "text-template": TextTemplate,
    "button-template": ButtonTemplate,
  },
  data() {
    return {
      ServicesItems: [
        {
          id: 1,
          image: "icon-1.svg",
          title: "Поиск производителей по товару",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
        },
        {
          id: 2,
          image: "icon-2.svg",
          title: "Поиск конкретного производителя",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
        },
        {
          id: 3,
          image: "icon-3.svg",
          title: "Доставка образцов товаров",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about {
  position: relative;
}
.about__wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 110px;
}
.about__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about__background {
  width: 600px;
  background-color: #0b7572;
  min-height: 780px;
  position: absolute;
  top: 0;
  bottom: auto;
  left: auto;
  right: 0;
}
.about__image {
  border-radius: 20px 0px 0px 20px;
  min-width: 635px;
  z-index: 2;
}
.services {
  z-index: 2;
  padding-top: 70px;
}
.services__wrapper {
  z-index: 2;
  display: flex;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 60px 0;
  :last-child {
    border-right: none;
  }
}
.services__card {
  z-index: 2;
}

</style>
