<template>
  <div class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__section">
          <div class="about__background"></div>
          <div class="about__info">
            <text-template :element="FirstTemplate"></text-template>
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
                v-bind:card="card"
              ></service-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /. about -->
  <div class="voting">
    <div class="container">
      <div class="voting__wrapper">
        <div class="voting__section">
          <text-template :element="SecondTemplate"></text-template>
        </div>

        <div class="voting__section">
          <div class="voting__form">
            <voting-card
              v-for="vote in VotingItems"
              v-bind:key="vote.id"
              v-bind:vote="vote"
            ></voting-card>
          </div>

          <div class="voting__button">
            <div class="voting__counter">
              <span class="title">Проголосовало:</span>
              <span class="title"
                ><span class="title-num">1107</span> пользователей</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ServiceCard from "@/components/ServiceCard";
import VotingCard from "@/components/VotingCard";
import TextTemplate from "@/components/TextTemplate";
import ButtonTemplate from "@/components/ButtonTemplate";

export default {
  name: "App",
  components: {
    "service-card": ServiceCard,
    "voting-card": VotingCard,
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
      VotingItems: [
        {
          id: 1,
          title: "Я работаю на произвостве",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 2,
          title: "Я поставляю товары",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 3,
          title: "Я помогаю подобрать оборудование",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
      ],
      TextTemplate: [
        {
          id: 1,
          title: "Поставщик Дальнего Востока",
          subtitle:
            "Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.",
        },
        {
          id: 2,
          title: "В какой сфере вы работаете?",
          subtitle:
            "Мы проводим опрос среди пользователей сайта, чтобы предоставить Вам информацию соответствующую сфере Вашей деятельности.",
        },
      ],
    };
  },
  // /.DATA
  computed: {
    FirstTemplate() {
      return this.TextTemplate.find((item) => item.id == 1);
    },
    SecondTemplate() {
      return this.TextTemplate.find((item) => item.id == 2);
    },
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
.voting {
  margin-top: 120px;
}
.voting__wrapper {
  display: flex;
  flex-direction: column;
}
.voting__section {
  display: flex;
}
.voting__button {
  margin: 0 auto;
}
.voting__counter {
  width: auto;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ffce50;
}
</style>
