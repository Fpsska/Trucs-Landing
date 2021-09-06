<template>
  <div class="about">
    <!-- <div class="about__background"></div> -->
    <div class="about__decoration">
      <div class="container">
        <div class="about__wrapper">
          <div class="about__section_1">
            <div class="about__info">
              <text-template
                data-mark="1"
                v-bind:element="FirstTemplate"
              ></text-template>
              <button-template
                v-bind:button="ButtonFirstTemplate"
              ></button-template>
            </div>
            <div class="about__image"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="about__section_2">
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
  <!-- /. about -->
  <div class="voting">
    <div class="container">
      <div class="voting__wrapper">
        <div class="voting__section">
          <text-template v-bind:element="SecondTemplate"></text-template>
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
  <!-- /. voting -->
  <div class="advantage">
    <div class="advantage__wrapper">
      <div class="advantage__section">
        <div class="advantage__decoration">
          <h2 class="advantage__title title-big">Почему с нами выгоднее?</h2>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="advantage__elements">
        <advantage-card
          v-for="skill in AdvantageItems"
          v-bind:key="skill.id"
          v-bind:skill="skill"
        ></advantage-card>
      </div>
    </div>
  </div>
  <!-- /. advantage -->
  <div class="portfolio">
    <div class="container">
      <div class="portfolio__wrapper">
        <div class="portfolio__section">
          <text-template v-bind:element="ThirdTemplate"></text-template>
        </div>
        <div class="portfolio__section">
          <div class="portfolio__slider slider">
            <slider-list v-bind:items="SliderItems"></slider-list>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /. portfolio -->
  <div class="clients">
    <div class="container">
      <div class="clients__wrapper">
        <div class="clients__section_1">
          <h2 class="clients__title title-big">Привлеченные клиенты</h2>
        </div>
        <div class="clients__section_2">
          <div class="clients__table board">
            <div class="board__information">
              <img class="board__logo" src="./assets/images/logo.svg" alt="#" />
              <p class="board__requisites">
                ООО "ПДВ" ИНН 7329023100 КПП 732901001 433405, Ульяновская обл.,
                Территория Портовой особой Экономической зоны, Проезд Первых
                Резидентов 3 Телефон: +7 8422 99 666 5 e-mail: info@pdv.ooo
              </p>
            </div>
            <!--  -->
            <table class="table">
              <thead>
                <tr class="table__row table__row-name">
                  <td class="table__col-title title">Фото</td>
                  <td class="table__col-title title">Название</td>
                  <td class="table__col-title title">Производитель</td>
                  <td class="table__col-title title">Контакт</td>
                </tr>
              </thead>
              <tbody>
                <table-item
                  v-for="table in TableItems"
                  v-bind:key="table.id"
                  v-bind:table="table"
                ></table-item>
              </tbody>
            </table>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /. clients -->
  <div class="supply">
    <div class="container">
      <text-template v-bind:element="FourthTemplate"></text-template>
      <div class="supply__wrapper">
        <stage-item
          v-for="supply in StageItems"
          v-bind:key="supply.id"
          v-bind:supply="supply"
        ></stage-item>
      </div>
    </div>
  </div>
  <!-- /. supply -->
  <div class="partners">
    <div class="container">
      <text-template v-bind:element="FifthTemplate"></text-template>
      <div class="partners__wrapper">
        <partner-item
          v-for="partner in PartnerItems"
          v-bind:key="partner.id"
          v-bind:partner="partner"
        ></partner-item>
      </div>
    </div>
  </div>
  <!-- /. partners -->
  <div class="workers">
    <div class="container">
      <text-template v-bind:element="SixthTemplate"></text-template>
      <div class="workers__wrapper">
        <worker-card
          v-for="worker in WorkerItems"
          v-bind:key="worker.id"
          v-bind:worker="worker"
        ></worker-card>
      </div>
    </div>
  </div>
  <!-- /. workers -->
  <div class="contacts">
    <div class="container">
      <text-template v-bind:element="SeventhTemplate"></text-template>
      <div class="contacts__wrapper">
        <div class="contacts__section_1">
          <div class="contacts__social social">
            <social-list
              v-for="social in SocialItems"
              v-bind:key="social.id"
              v-bind:social="social"
            ></social-list>
          </div>
        </div>
        <div class="contacts__section_2 requisites">
          <div class="requisites_wrapper">
            <ul class="requisites__list">
              <requisite-item
                v-for="requisites in RequisiteItems"
                v-bind:key="requisites.id"
                v-bind:requisites="requisites"
              ></requisite-item>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /. contacts -->
  <div class="feedback">
    <div class="container">
      <div class="feedback__wrapper">
        <div class="feedback__section_1">
          <text-template v-bind:element="EightTemplate"></text-template>
          <form class="form" name="feedback">
            <div class="form__wrapper">
              <form-input
                v-for="input in FormInputItems"
                v-bind:key="input.id"
                v-bind:input="input"
              ></form-input>
              <button class="form__button" type="button">
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
        <div class="feedback__section_2">
          <img
            class="feedback__image"
            src="./assets/images/cranes.png"
            alt="crans"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- /. feedback -->
  <div class="data">
    <div class="container">
      <text-template v-bind:element="NinthTemplate"></text-template>
      <div class="data__wrapper">
        <div class="data__section">
          <h2 class="data__title title">Описание задачи</h2>
          <p class="data__description subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
            duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus
            turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque
            viverra mauris in. Pharetra convallis posuere morbi leo urna. Eget
            sit amet tellus cras adipiscing.
          </p>
        </div>
        <div class="data__task task">
          <h2 class="task__title title">Техническое задание</h2>
          <div class="task__wrapper">
            <task-template
              v-for="task in TaskItems"
              v-bind:key="task.id"
              v-bind:task="task"
            ></task-template>
          </div>
        </div>
        <div class="data__gallery gallary">
          <h2 class="gallary__title title">Фотографии товара</h2>
          <div class="gallary__images">
            <gallery-card
              v-for="card in GalleryItems"
              v-bind:key="card.id"
              v-bind:card="card"
            ></gallery-card>
          </div>
        </div>
        <button class="data__button">Подтвердить информацию</button>
      </div>
    </div>
  </div>
  <!-- /.data  -->
  <div class="overview">
    <div class="container">
      <div class="overview__wrapper">
        <div class="overview__text">
          <text-template v-bind:element="TenthTemplate"></text-template>
          <p class="overview__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
            duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus
            turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque
            viverra mauris in. Pharetra convallis posuere morbi leo urna. Eget
            sit amet tellus cras adipiscing.
          </p>
        </div>
        <div class="overview__video">
          <iframe
            class="overview__iframe"
            src="https://www.youtube.com/embed/4UrCpchO1Os"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="overview__mask"></div>
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
import AdvantageCard from "@/components/AdvantageCard";
import TableItem from "@/components/TableItem";
import StageItem from "@/components/StageItem";
import PartnerItem from "@/components/PartnerItem";
import WorkerCard from "@/components/WorkerCard";
import SliderList from "@/components/SliderList";
import SocialList from "@/components/SocialList";
import RequisiteItem from "@/components/RequisiteItem";
import InputFormTemplate from "@/components/InputFormTemplate";
import GalleryCard from "@/components/GalleryCard";
import TaskFileTemplate from "@/components/TaskFileTemplate";

export default {
  name: "App",
  components: {
    "service-card": ServiceCard,
    "voting-card": VotingCard,
    "advantage-card": AdvantageCard,
    "text-template": TextTemplate,
    "button-template": ButtonTemplate,
    "table-item": TableItem,
    "stage-item": StageItem,
    "partner-item": PartnerItem,
    "worker-card": WorkerCard,
    "slider-list": SliderList,
    "social-list": SocialList,
    "requisite-item": RequisiteItem,
    "form-input": InputFormTemplate,
    "gallery-card": GalleryCard,
    "task-template": TaskFileTemplate,
  },
  data() {
    return {
      TextTemplate: [
        {
          id: 1,
          title: "Поставщик Дальнего Востока",
          subtitle:
            "Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.",
        },
        {
          id: 2,
          title: "Выполненные работы",
          subtitle:
            "Мы проводим опрос среди пользователей сайта, чтобы предоставить Вам информацию соответствующую сфере Вашей деятельности.",
        },
        {
          id: 3,
          title: "В какой сфере вы работаете?",
          subtitle:
            "Мы собрали информацию по грузам, которые мы уже доставили.У нас специальный подход к каждому виду товаров.",
        },
        {
          id: 4,
          title: "Этапы поставки",
        },
        {
          id: 5,
          title: "Нам доверяют",
        },
        {
          id: 6,
          title: "Сотрудники компании",
        },
        {
          id: 7,
          title: "Наши контакты",
        },
        {
          id: 8,
          title: "Свяжитесь с нами",
        },
        {
          id: 9,
          title: "Ваши данные",
        },
        {
          id: 10,
          title: "Видео о нашей работе",
        },
      ],
      GalleryItems: [
        {
          id: 1,
          image: "good-1.png",
          text: "IMG12344.png",
        },
        {
          id: 2,
          image: "good-2.png",
          text: "IMG00344.png",
        },
        {
          id: 3,
          image: "good-3.png",
          text: "IMG00544.png",
        },
      ],
      TaskItems: [
        {
          id: 1,
          icon: "document",
          title: "ТЗ_задачи.doc",
        },
      ],
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
      AdvantageItems: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          image: "lock.svg",
        },
        {
          id: 2,
          title: "Consectetur adipiscing elit",
          subtitle:
            "Quisquam reprehenderit illo nobis vel, aliquam consequuntur eos cum voluptatum sit maxime.",
          image: "tablet.svg",
        },
        {
          id: 3,
          title: "Iusto laborum distinctio magnam",
          subtitle:
            "Sunt dolores fuga recusandae repellat, numquam quas nemo dolore aliquam.",
          image: "money.svg",
        },
        {
          id: 4,
          title: "Dolores fuga recusandae repellat",
          subtitle:
            "Voluptatem tenetur laboriosam natus odio! Iusto laborum distinctio magnam debitis minus qui.",
          image: "planet.svg",
        },
      ],
      SliderItems: [
        {
          id: 1,
          image: "portfolio-1.png",
          title: "Станки и оборудование",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "20 000",
        },
        {
          id: 2,
          image: "portfolio-2.png",
          title: "Компоненты и запчасти",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "18 000",
        },
        {
          id: 3,
          image: "portfolio-3.png",
          title: "Квартирные переезды",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "22 000",
        },
      ],
      ButtonTemplate: [
        {
          id: 1,
          text: "Узнать больше",
        },
        {
          id: 2,
          text: "1107 пользователей",
        },
      ],
      TableItems: [
        {
          id: 1,
          image: "clients.png",
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "120 000",
          producer: "Завод «Hlobalkhim»",
          address: "г. Москва, проспект Кутузовский, д. 12 стр. 1 этаж, пом. 1",
          user: "Коваль Иван Борисович",
          profession: "Руководитель отдела поставок",
          number: "+ 7 (495) 765 33 22",
          rating: "rating-1.svg",
        },
        {
          id: 2,
          image: "clients.png",
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "50 000",
          producer: "Даниловский строительный завод",
          address: "Москва, Даниловская наб., д. 8 стр. 1 этаж, пом. 2",
          user: "Лубен Валерий Вячеславович",
          profession: "Руководитель отдела поставок",
          number: "+ 7 (495) 765 33 22",
          rating: "rating-1.svg",
        },
        {
          id: 3,
          image: "clients.png",
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
          price: "54 000",
          producer: "Самарский строительный завод",
          address: "Самара, Самарская наб., д. 2 стр. 5 этаж, пом. 6",
          user: "Жмышенко Валерий Альбертович",
          profession: "Руководитель отдела поставок",
          number: "+ 7 (495) 765 33 22",
          rating: "rating-1.svg",
        },
      ],
      StageItems: [
        {
          id: 1,
          number: "1",
          image: "supply-1.png",
          title: "Предложение от продавца",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in.",
        },
        {
          number: "2",
          id: 2,
          image: "supply-2.png",
          title: "Доставка",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in.",
        },
        {
          number: "3",
          id: 3,
          image: "supply-3.png",
          title: "Установка у клиента",
          subtitle:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in.",
        },
      ],
      PartnerItems: [
        {
          id: 1,
          image: "rosatom.svg",
          title: "Росатом",
          subtitle: "Корпорация атомной энергии",
        },
        {
          id: 2,
          image: "gasprom.svg",
          title: "Газпром",
          subtitle: "Энергетическая компания",
        },
        {
          id: 3,
          image: "rosneft.svg",
          title: "Роснефть",
          subtitle: "Нефтегазовая компания",
        },
        {
          id: 4,
          image: "roskosmos.svg",
          title: "Роскосмос",
          subtitle: "Корпорация в космической отрасли",
        },
        {
          id: 5,
          image: "lukoil.svg",
          title: "Лукойл",
          subtitle: "Нефтяная компания",
        },
        {
          id: 6,
          image: "rao.svg",
          title: "Интер РАО",
          subtitle: "Энергетическая компания",
        },
        {
          id: 7,
          image: "rostech.svg",
          title: "Ростех",
          subtitle: "Промышленная корпорация",
        },
        {
          id: 8,
          image: "vtb.svg",
          title: "Банк ВТБ",
          subtitle: "Коммерческий банк",
        },
      ],
      WorkerItems: [
        {
          id: 1,
          social_1: "instagram",
          social_2: "vk",
          social_3: "linkedin",
          image: "worker-1.png",
          title: "Антон Макаров",
          subtitle: "Руководитель компании",
        },
        {
          id: 2,
          social_1: "instagram",
          social_2: "vk",
          social_3: "linkedin",
          image: "worker-4.png",
          title: "Елена Валерьева",
          subtitle: "Главный бухгалтер",
        },
        {
          id: 3,
          social_1: "instagram",
          social_2: "vk",
          social_3: "linkedin",
          image: "worker-2.png",
          title: "Иван Аркадьев",
          subtitle: "Менеджер по закупкам",
        },
        {
          id: 4,
          social_1: "instagram",
          social_2: "vk",
          social_3: "linkedin",
          image: "worker-5.png",
          title: "Борис Вавилов",
          subtitle: "Бухгалтер",
        },
        {
          id: 5,
          social_1: "instagram",
          social_2: "vk",
          social_3: "linkedin",
          image: "worker-3.png",
          title: "Алина Кравец",
          subtitle: "Сотрудник отдела кадров",
        },
        {
          id: 6,
          social_1: "instagram",
          social_2: "vk",
          social_3: "linkedin",
          image: "worker-6.png",
          title: "Виктор Козуб",
          subtitle: "Менеджер по закупкам",
        },
      ],
      SocialItems: [
        {
          id: "1",
          name: "phone",
          title: "Телефон",
          subtitle: "+7 8422 99 666 5",
          href: "tel:+7 8422 99 666 5",
        },
        {
          id: "2",
          name: "email",
          title: "E-mail",
          subtitle: "info@pdv.ooo",
          href: "mailto:info@pdv.ooo",
        },
        {
          id: "3",
          name: "whatsapp",
          title: "Whatsapp",
          subtitle: "+86 158 666 95 616",
          href: "tel:+86 158 666 95 616",
        },
        {
          id: "4",
          name: "skype",
          title: "Skype",
          subtitle: "sxy-bolts.cn",
          href: "#",
        },
      ],
      RequisiteItems: [
        {
          id: 1,
          title: "Полное наименование:",
          text: "ООО «Поставщик Дальнего Востока»",
        },
        {
          id: 2,
          title: "ИНН:",
          text: "7329023100",
        },
        {
          id: 3,
          title: "КПП:",
          text: "732901001",
        },
        {
          id: 4,
          title: "ОГРН:",
          text: "1167325074762",
        },
        {
          id: 5,
          title: "Адрес:",
          text: "Россия, Ульяновская обл, территория Портовой Особой Экономической Зоны, проезд Первых Резидентов дом 3",
        },
      ],
      FormInputItems: [
        {
          id: 1,
          type: "file",
          title: "Прикрепите ТЗ",
          inputImage: "add-file",
          options: {
            name: "fileUpload",
            required: true,
            multiple: true,
          },
        },
        {
          id: 2,
          type: "file",
          title: "Добавьте фото товара",
          inputImage: "add-image",
          options: {
            name: "imageUpload",
            accept: "image/*",
            required: true,
            multiple: false,
          },
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
    ThirdTemplate() {
      return this.TextTemplate.find((item) => item.id == 3);
    },
    FourthTemplate() {
      return this.TextTemplate.find((item) => item.id == 4);
    },
    FifthTemplate() {
      return this.TextTemplate.find((item) => item.id == 5);
    },
    SixthTemplate() {
      return this.TextTemplate.find((item) => item.id == 6);
    },
    SeventhTemplate() {
      return this.TextTemplate.find((item) => item.id == 7);
    },
    EightTemplate() {
      return this.TextTemplate.find((item) => item.id == 8);
    },
    NinthTemplate() {
      return this.TextTemplate.find((item) => item.id == 9);
    },
    TenthTemplate() {
      return this.TextTemplate.find((item) => item.id == 10);
    },

    ButtonFirstTemplate() {
      return this.ButtonTemplate.find((item) => item.id == 1);
    },
    ButtonSecondTemplate() {
      return this.ButtonTemplate.find((item) => item.id == 2);
    },
  },
  // /.COMPUTED
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
.about__section_1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about__section_2 {
  position: relative;
  z-index: 2;
}
.about__decoration {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: auto;
    left: auto;
    right: 0;
    background-color: #0b7572;
    height: 790px;
    width: 600px;
  }
}
.about__image {
  border-radius: 20px 0px 0px 20px;
  min-width: 635px;
  min-height: 505px;
  z-index: 2;
  background-image: url(./assets/images/trailer-pulling.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
// /.about
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
// /.services
.voting {
  margin: 120px 0 100px 0;
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
// /.voting
.advantage {
  margin-bottom: 120px;
}
.advantage__wrapper {
  position: relative;
  text-align: end;
  // padding: 225px 0;
  // min-height: 453px;
  height: 453px;
  margin-bottom: 75px;

  background-image: url(./assets/images/tractor.png);
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}
.advantage__section {
  position: absolute;
  width: 87%;
  top: 0;
  bottom: auto;
  left: 0;
  right: auto;
  height: 100%;
}
.advantage__decoration {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 170px 0 0;
  clip-path: polygon(0 0, 60% 0, 100% 100%, 0% 100%);
  background-color: #0b7572;
}
.advantage__title {
  color: #ffff;
}
.advantage__elements {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  :nth-last-child(-n + 2),
  :last-child {
    margin-bottom: 0;
  }
}
// /.advantage
.portfolio {
  margin-bottom: 120px;
}
.slider {
  :last-child {
    margin-right: 0;
  }
}
// /.portfolio
.clients {
  margin-bottom: 200px;
  position: relative;
  &::before {
    content: url(./assets/images/decoration.svg);
    position: absolute;
    top: 0;
    left: 20%;
  }
}
.clients__wrapper {
  display: flex;
  padding: 85px 0;
  background-color: #0b7572;
}
.clients__section_1 {
  width: 40%;
  padding-left: 60px;
}
.clients__section_2 {
  width: 60%;
}
.clients__title {
  color: #fff;
  padding: 10px;
}
.board {
  width: 650px;
  min-height: 745px;
  border-radius: 8px;
  padding: 32px;
  background: #ffffff;
}
.board__information {
  display: flex;
  justify-content: space-between;
  padding-bottom: 32px;
  border-bottom: 1px solid #d7d7dd;
}
.board__requisites {
  width: 275px;
  font-size: 11px;
}
.table {
  width: 100%;
  height: 100%;
  margin-top: 32px;
}
.table__image {
  width: 81px;
  height: 74px;
}
.table__row {
  display: grid;
  align-items: flex-start;
  grid-column-gap: 20px;
  grid-template-columns: auto repeat(3, 1fr);
  padding: 24px 16px;
}
.table__column {
  display: flex;
  flex-direction: column;
}
.table__row-name {
  padding: 15px 36px;
  display: grid;
  justify-items: center;
}
.table__col-title {
  color: #fff !important;
}
// /.clients
.supply {
  margin-bottom: 120px;
}
.supply__wrapper {
  display: flex;
  flex-direction: column;
}
// /.supply
.partners {
  margin-bottom: 130px;
}
.partners__wrapper {
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  :nth-child(4),
  :last-child {
    border-right: none;
  }
}
// /.partners
.workers {
  margin-bottom: 130px;
}
.workers__wrapper {
  margin-top: 72px;
  display: flex;
  flex-wrap: wrap;
  :nth-child(2n) {
    margin-right: 0;
  }
  :nth-last-child(-n + 2),
  :last-child {
    margin-bottom: 0;
  }
}
// /.workers
.contacts {
  margin-bottom: 140px;
}
.contacts__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 72px;
}
.contacts__section_1 {
  width: 30%;
}
.contacts__section_2 {
  width: 65%;
}
.social {
  :last-child {
    margin-bottom: 0;
  }
}
.requisites__list {
  background: #f9f9fb;
  border-radius: 5px;
  padding: 40px 48px;
  :last-child {
    border-bottom: none;
  }
}
// /.contacts
.feedback {
  margin-bottom: 130px;
}
.feedback__wrapper {
  display: flex;
  position: relative;
}
.feedback__section_1 {
  width: 60%;
  padding: 200px 56px;
  background-color: #0b7572;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  z-index: 1;
}
.feedback__section_2 {
  width: 45%;
  display: flex;

  position: absolute;
  left: auto;
  right: 0;
  width: 100%;
  height: 100%;
}
.feedback__image {
  width: 100%;
}
.form__wrapper {
  display: flex;
  flex-direction: column;
}
.form__button {
  color: #0b7572;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  width: 205px;
  font-weight: 600;
  margin-top: 65px;
}
// /.feedback
.data {
  margin-bottom: 100px;
}
.data__wrapper {
  background: #f9f9fb;
  border-radius: 5px;
  padding: 56px 48px;
}
.data__description.data__description {
  margin: 16px 0 0 0;
}
.data__button {
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  background: #0b7572;
  border-radius: 4px;
  padding: 20px;
}
.gallary {
  margin-bottom: 80px;
}
.gallary__images {
  display: flex;
}
.gallary__card {
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
}
.gallary__title {
  margin-bottom: 24px;
}
.gallary__image {
  width: 175px;
  height: 135px;
  margin-bottom: 16px;
}
.task__wrapper {
  display: flex;
  align-items: center;
}
.task {
  margin: 40px 0 36px 0;
}
.task__title {
  margin-bottom: 16px;
}
.task__icon {
  margin-right: 16px;
}
.task__description {
  text-decoration: underline;
}
// /.data

.overview {
  margin-bottom: 130px;
}
.overview__text {
  margin-bottom: 40px;
}
.overview__video {
  position: relative;
  padding: 0px 0px 56% 0px;
  overflow: hidden;
}
.overview__iframe {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.overview__mask {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(./assets/images/truck-overview.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  position: absolute;
  transition: 0.45s linear;
  top: 0;
}
.overview__video:hover .overview__mask {
  top: -100%;
}
</style>
