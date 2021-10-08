import { createStore } from "vuex";

export default createStore({
    actions: {
        FormHandler(context, payload) {
            switch (payload.name) {
                case "TEXT-TASK":
                    context.commit("textAreaMutation", payload.value)
                    break
                case "FILE-DOC":
                    context.commit("inputFileMutation", payload.file)
                    break
                case "FILE-IMAGE":
                    context.commit("inputImageMutation", payload.file)
                    break
            }
        },
    },
    mutations: {
        textAreaMutation(state, value) {
            state.FormTemplate.text = value
        },
        inputImageMutation(state, image) {
            const fileReader = new FileReader();
            const imageName = image.name.trim()
            state.FormTemplate.imagename = imageName
            fileReader.readAsDataURL(image)
            fileReader.onload = () => {
                state.FormTemplate.imageurl = fileReader.result
            }
        },
        inputFileMutation(state, file) {
            const fileName = file.name.trim()
            state.FormTemplate.filename = fileName
        },
        formVisibleMutatiaon(state, boolean) {
            state.isFormVisible = boolean
        },
        formSubmitMutatiaon(state) {
            state.isFormSubmted = true
        }
    },
    // /. MUTATIONS
    state() {
        return {
            isFormVisible: false,
            isFormSubmted: false,
            FormTemplate: {
                text: "",
                filename: "",
                imagename: "",
                imageurl: ""
            },
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
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
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
            TableItems: [
                {
                    id: 1,
                    class: "table__row_1",
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
                    class: "table__row_2",
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
                    class: "table__row_3",
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
                    image: "stage-1.png",
                    title: "Предложение от продавца",
                    subtitle:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in.",
                },
                {
                    number: "2",
                    id: 2,
                    image: "stage-2.png",
                    title: "Доставка",
                    subtitle:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in.",
                },
                {
                    number: "3",
                    id: 3,
                    image: "stage-3.png",
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
                    placeholder: "Опишите задачу",
                    name: "TEXT-TASK",
                    disabled: false
                },
                {
                    id: 2,
                    title: "Прикрепите ТЗ",
                    inputImage: "add-file",
                    accept: ".doc,.docx,.txt,.xlsx,.xls,.pdf",
                    options: {
                        type: "file",
                        name: "FILE-DOC",
                        required: false,
                        multiple: false,
                    },
                },
                {
                    id: 3,
                    title: "Добавьте фото товара",
                    inputImage: "add-image",
                    accept: "image/*",
                    options: {
                        type: "file",
                        name: "FILE-IMAGE",
                        required: false,
                        multiple: false,
                    },
                },
            ],
            GalleryItems: [
                {
                    id: 1,
                    // image: "good-1.png",
                    // text: "IMG12344.png",
                },
            ],
        }
    },
    // /. STATE
});
