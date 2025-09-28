interface ClassProp {
  path: string;
  class: string;
  role: string;
  icon: string;
  subClasses: SubClassesProp;
}

interface SubClassesProp {
  [subKey: string]: SubclassProp;
}

interface SubclassProp {
  subClassName: string;
  subClassRole: string;
  level5: LevelAbilitiesProp;
  level10: LevelAbilitiesProp;
  level20: LevelAbilitiesProp;
}

interface LevelAbilitiesProp {
  ability: AbilityProp[];
}

interface AbilityProp {
  isActive: boolean;
  description: string;
}

const dataClass: ClassProp[] = [
  {
    path: 'warrior',
    class: 'Воин',
    role: 'фронтлайнер, физический урон, танк.',
    icon: '⚔️',
    subClasses: {
      subClassOne: {
        subClassName: 'Мастер Меча',
        subClassRole: '(Классический рыцарь)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Осквернённый рывок — быстрый рывок к врагу с мощным ударом. Есть шанс пробить блок или щит.',
            },
            {
              isActive: true,
              description:
                'Железная стойка — повышает устойчивость к контролю (стан, замедление) и временно снижает входящий урон.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Командный рывок — прыжок к союзнику, перехват урона и мгновенная защита.',
            },
            {
              isActive: true,
              description:
                'Клеймо чести — помечает врага как «достойного соперника»: ты наносишь ему больше урона, но и он — тебе.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Щитовая воля — временно даёт иммунитет к отталкиванию, сбиванию и страху.',
            },
            {
              isActive: false,
              description:
                'Печать доблести — пока Мастер меча находится рядом, союзники получают бонус к броне и устойчивости.',
            },
          ],
        },
      },
      subClassTwo: {
        subClassName: 'Берсерк',
        subClassRole: '(Ярость, мясо и хаос)',
        level5: {
          ability: [
            {
              isActive: false,
              description:
                'Ярость — дает силу атаки пропорционально не достающему HP.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Кровавая тяга — наносишь урон себе, чтобы нанести критический удар врагу.',
            },
            {
              isActive: true,
              description:
                'Рёв боли — пугает ближайших врагов, если ты ранен — страх длится дольше.',
            },
            {
              isActive: false,
              description:
                'Яростный порыв — атака по одной цели критует, если у тебя меньше 30% HP.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: false,
              description:
                'Безразличие к боли — чем меньше ХП, тем выше сопротивление контролю.',
            },
            {
              isActive: false,
              description:
                'Последняя ярость — при получении смертельного удара остаётся жив с 1 HP, на некоторое время получает неуязвимостью и усиленным уроном.',
            },
          ],
        },
      },
      subClassThree: {
        subClassName: 'Мастер Восточного Меча',
        subClassRole: '(Самурай, скорость и точность)',
        level5: {
          ability: [
            {
              isActive: false,
              description:
                'Разящий клинок — сила атаки дополнительно скалируется от скорости.',
            },
            {
              isActive: true,
              description:
                'Гармония клинка — в течение 5 секунд каждая атака восстанавливает немного здоровья.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Клинок тишины — атака, которая наносит урон и накладывает эффект молчания (враг не может использовать магические способности).',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Мгновенная перезарядка — сбрасывает КД всех умений, но теряешь 20% HP.',
            },
            {
              isActive: true,
              description:
                'Дыхание клинка — временно повышает точность и шанс крита, усиливается если ты один.',
            },
          ],
        },
      },
    },
  },
  {
    path: 'shieldworm',
    class: 'Щитовик',
    role: 'защита, контроль, выживаемость.',
    icon: '🛡️',
    subClasses: {
      subClassOne: {
        subClassName: 'Абсолютный Щит',
        subClassRole: '("Я не двигаюсь. Я — стена.")',
        level5: {
          ability: [
            {
              isActive: true,
              description: 'Щит — ты можешь создавать щит размером с себя.',
            },
            {
              isActive: true,
              description:
                'Щитовая волна — удар щитом по земле, отбрасывает всех врагов вокруг и временно снижает их урон.',
            },
            {
              isActive: false,
              description: 'Форд — повышает показатель защиты.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Стена плоти — ты не можешь двигаться, но весь урон, проходящий через тебя снижается на 80%.',
            },
            {
              isActive: false,
              description:
                'Провокация взгляда — враги, впервые увидевшие тебя, чаще выбирают цель — именно тебя.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Заслон для мира — весь урон, нанесённый по союзникам в радиусе, перенаправляется на тебя.',
            },
            {
              isActive: true,
              description:
                'Глухая оборона — следующий удар, нанесённый тебе, полностью игнорируется. Может сработать на любой тип урона, даже магический.',
            },
          ],
        },
      },
      subClassTwo: {
        subClassName: 'Элементальный Щит',
        subClassRole:
          '(“Щит из огня, воды, ветра или камня — я выберу нужный.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Элементальный щит — позволяет создавать элементальный щит с 4 ячейками под элементы.',
            },
            {
              isActive: false,
              description:
                'Тело элемент — повышает защиту от магии и от элементальных атак.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: false,
              description:
                'Аура стихии — активный щит даёт бонус союзникам рядом (огонь — урон, вода — живучесть, ветер — скорость, камень — броня).',
            },
            {
              isActive: true,
              description:
                'Импульс силы — щитовик выпускает волну, которая не наносит урон, но даёт всем союзникам в радиусе временное усиление урона и силы крита.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Удар резонанса — ближняя атака щитом, после которой ближайший союзник получает +20% урона на следующую атаку. Если союзник маг — бонус применяется к заклинанию.',
            },
            {
              isActive: false,
              description:
                'Синергия удара — каждый раз, когда щитовик успешно блокирует атаку — случайный союзник восстанавливает немного маны и получает +5% к урону на 3 секунды.',
            },
            {
              isActive: false,
              description:
                'Боевое равновесие — чем больше врагов в радиусе блокирования, тем сильнее баф урона для ближайших союзников.',
            },
          ],
        },
      },
      subClassThree: {
        subClassName: 'Святой Щит',
        subClassRole: '("Бейте меня — и я стану сильнее. И вылечу всех.")',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Святой щитоносец — позволяет создать маленький щит который хилеть владельца при защите и дополнительно хилеть при поломке.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: false,
              description:
                'Преображение страдания — часть урона по тебе превращается в постепенное восстановление.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Собственное искупление — жертвуешь частью своего здоровья, чтобы мгновенно вылечить союзника на 2x больше.',
            },
            {
              isActive: false,
              description:
                'Отражение боли — часть урона, заблокированного щитом, возвращается атакующему в виде святого урона.',
            },
          ],
        },
      },
    },
  },
  {
    path: 'wizard',
    class: 'Маг',
    role: 'дальний урон, контроль поля.',
    icon: '🔮',
    subClasses: {
      subClassOne: {
        subClassName: 'Стихийный Маг',
        subClassRole:
          '(“Чем проще заклинание — тем разрушительнее оно может стать.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Магия — даёт возможность пользоваться стихийной магией с 4 слотами.',
            },
            {
              isActive: false,
              description: 'Сила стихий — усиливает стихийную магию владельца.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Перенаправление потока — изменяешь направление заклинания.',
            },
            {
              isActive: true,
              description:
                'Сдвиг Потока — позволяет мгновенно сменить активную стихию.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: false,
              description:
                'Резонанс стихий — при многократном использовании одной стихии подряд её заклинания дешевле и мощнее.',
            },
            {
              isActive: false,
              description:
                'Природная настройка — маг чувствует преобладающую стихию в области и усиливается, если ею пользуется.',
            },
          ],
        },
      },
      subClassTwo: {
        subClassName: 'Профильный Маг',
        subClassRole: '(“Истинный маг — это тот, кто сам пишет правила.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'МОЯ магия — даёт возможность создать одно свое заклинание.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: false,
              description:
                'Заклинатель-создатель — получаешь бонус к урону или эффективности своего авторского заклинания.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Знак Фокусировки — усиливает следующее Персональное Заклинание на 10%, добавляя эффект (например, взрыв при попадании, отражение, дебаф).',
            },
            {
              isActive: false,
              description:
                'Совершенство — позволяет усилить авторское заклинание и снять некоторые условия.',
            },
          ],
        },
      },
    },
  },
  {
    path: 'thief',
    class: 'Вор',
    role: 'скрытный урон, разведка.',
    icon: '🗡️',
    subClasses: {
      subClassOne: {
        subClassName: 'Классический Вор',
        subClassRole: '(“Тени — мои союзники. Замки — просто пазлы.”)',
        level5: {
          ability: [
            {
              isActive: false,
              description:
                'Неуловимый — дает скрытность скалирующуюся от скорости персонажа.',
            },
            {
              isActive: true,
              description:
                'Залп метательных кинжалов — мгновенно кидает несколько кинжалов по зоне. Каждый враг в радиусе получает урон и шанс быть замедленным.',
            },
            {
              isActive: false,
              description: 'Взлом — открывает ваши врождённые навыки вора.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Невидимка — ненадолго становишься полностью невидимым, даже при атаке.',
            },
            {
              isActive: true,
              description:
                'Бросок песка — враг временно ослепляется, теряя точность и шанс крита. Может быть использован даже в ближнем бою.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: false,
              description:
                'Кошачья грация — при уклонении — шанс автоматически контратаковать метательным оружием.',
            },
            {
              isActive: true,
              description:
                'Мастер побега — мгновенно увеличивает скорость передвижения и снимает эффекты контроля.',
            },
          ],
        },
      },
      subClassTwo: {
        subClassName: 'Робин Гуд',
        subClassRole:
          '(“Я краду у богатых, чтобы стать быстрее. И делать это ещё чаще.”)',
        level5: {
          ability: [
            {
              isActive: false,
              description:
                'Помощь — каждый раз, когда ты безвозмездно и безвозвратно жертвуешь золото или ценности нуждающимся, ты получаешь плюс к скорости навсегда как псевдо статистику.',
            },
            {
              isActive: false,
              description:
                'Символ свободы — когда в группе есть NPC, которому ты помог, вся группа получает бонус к скорости и силе атаки.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Путь справедливости — выбираешь "врага угнетения" — против него ты всегда получаешь + к урону и шансу крита.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Идея восстания — вдохновляет союзников: увеличивает их скорость и шанс уклонения.',
            },
            {
              isActive: false,
              description:
                'Сердце справедливости — чем меньше у тебя золота — тем выше шанс критического удара.',
            },
          ],
        },
      },
      subClassThree: {
        subClassName: 'Охотник',
        subClassRole: '(“Я вижу тебя. Даже если ты ещё не вышел из леса.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Звериное чутьё — обнаруживает вражеские следы, даже если они маскируются магией.',
            },
            {
              isActive: true,
              description:
                'Лучник — позволяет создавать из манны лук и стрелы.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: false,
              description:
                'Живой компас — всегда знаешь, где находится способ побега, выход или укрытие.',
            },
            {
              isActive: false,
              description:
                'Тихая охота — пока враг не видит охотника — выстрел наносит увеличенный урон и может наложить эффект "молчания" (запрет магии).',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Звериная грация — временно получаешь + к ускорению, + к увороту.',
            },
            {
              isActive: true,
              description:
                'Метка добычи — помечаешь врага: он подсвечивается даже через стены, по нему ты наносишь повышенный урон.',
            },
          ],
        },
      },
    },
  },
  {
    path: 'cleric',
    class: 'Клерик',
    role: 'поддержка, исцеление, магический контроль.',
    icon: '✝️',
    subClasses: {
      subClassOne: {
        subClassName: 'Стихийный Клерик',
        subClassRole:
          '(“Я не бью врагов. Я вдохновляю союзников, чтобы они делали это лучше.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description: 'Благословение Земли — усиливает защиту союзника.',
            },
            {
              isActive: true,
              description: 'Благословение Огня — усиливает силу союзника.',
            },
            {
              isActive: true,
              description:
                'Благословение Воздуха — усиливает скорость союзника.',
            },
            {
              isActive: true,
              description: 'Благословение Воды — усиливает интеллект союзника.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: false,
              description:
                'Чистота Влияния — наложенные эффекты не могут быть развеяны в течение короткого времени.',
            },
            {
              isActive: true,
              description:
                'Щит веры — накладывает барьер на союзника, который поглощает урон',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: false,
              description:
                'Святое присутствие — союзники рядом получают небольшой бонус к уклонению и сопротивлению.',
            },
            {
              isActive: false,
              description:
                'Благословенная кровь — при получении урона, есть шанс автоматически наложить на себя щит.',
            },
          ],
        },
      },
      subClassTwo: {
        subClassName: 'Проклятый Клерик',
        subClassRole:
          '(“Когда вера умирает, остаётся только злоба. И она сильна.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Порча Благословения — любой положительный эффект на враге превращается в противоположный (бафф → дебафф).',
            },
            {
              isActive: true,
              description:
                'Проклятая молитва — враги в зоне слышат жуткий шёпот: накладывает страх, уменьшающий точность и урон.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: false,
              description:
                'Проклятый Браслет — усиливает проклятия, если рядом нет союзников (соло-стиль).',
            },
            {
              isActive: false,
              description:
                'Тьма духа — при попадании по проклятому врагу у атакующего союзника или владелец восстанавливает немного маны.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Темное Крещение — временно "заражает" поле боя: все эффекты лечения врагов оборачиваются уроном.',
            },
            {
              isActive: true,
              description:
                'Клятва страдания — на цель накладывается проклятие, которое усиливает входящий урон от всех союзников.',
            },
            {
              isActive: false,
              description:
                'Разложение разума — при наложении проклятия есть шанс наложить и второй дебафф бесплатно.',
            },
          ],
        },
      },
      subClassThree: {
        subClassName: 'Святой Клерик',
        subClassRole:
          '(“Я — свет. Я — жизнь. Я — щит между смертью и надеждой.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Целитель — открывает возможность использовать магию исцеления.',
            },
            {
              isActive: false,
              description: 'Сила хила — усиливает магию исцеления.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Поток Света — моментальное восстановление 30% HP одной цели.',
            },
            {
              isActive: true,
              description:
                'Святая Волна — немного лечит всех союзников в области, удаляет негативные эффекты.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Световой Кокон — делает цель неуязвимой на не большой промежуток времени, но цель не может атаковать.',
            },
            {
              isActive: false,
              description:
                'Мантия Вечного Тепла — после каждого лечения вокруг создаётся зона постепенного регена.',
            },
            {
              isActive: false,
              description:
                'Несгибаемая молитва — первый смертельный удар по союзнику вместо гибели оставляет 1 HP.',
            },
          ],
        },
      },
    },
  },
  {
    path: 'friar',
    class: 'Монах',
    role: 'гибрид урона, контроля и выживаемости.',
    icon: '🧘‍♂️',
    subClasses: {
      subClassOne: {
        subClassName: 'Стихийный Монах',
        subClassRole: '(“Я вдыхаю пламя, выдыхаю бурю. Я танцую с природой.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Стихийное начало — позволяет окрашивать свои руки в одну из 4 стихий.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: false,
              description:
                'Аватар — позволяет соединять стихии и испускать стихийную энергию.',
            },
            {
              isActive: false,
              description:
                'Гармония Элементов — каждый удар разной стихией подряд усиливает следующий.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: false,
              description:
                'Эхо Стихии — каждый 4-й элементальный навык повторяет своё слабое отражение спустя 1 секунду (наносит 30% урона, повторяет эффект).',
            },
            {
              isActive: false,
              description:
                'Стихийная устойчивость — получает 30% сопротивления к последней использованной стихии (если использовал огонь — меньше урон от огня и т.д.). Эффект сохраняется до смены стихии.',
            },
          ],
        },
      },
      subClassTwo: {
        subClassName: 'Защитный Монах',
        subClassRole: '(“Я не нападаю. Я перенаправляю.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description:
                'Парирующий толчок — отменяет входящий удар и отбрасывает противника.',
            },
            {
              isActive: true,
              description:
                'Позиция Стойкости — снижает получаемый урон, но замедляет передвижение.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Отражающий рывок — короткий рывок, который перебивает вражеские касты и автоатаки.',
            },
            {
              isActive: false,
              description:
                'Сандалии Ветра — + к скорости при каждом успешном уклонении.',
            },
            {
              isActive: false,
              description:
                'Мягкий ответ — при уклонении есть шанс автоматически провести контратаку.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: true,
              description:
                'Парящий прыжок — прыгает к указанной точке. Если по пути соприкасается с врагом — наносит удар с оглушением.',
            },
            {
              isActive: true,
              description:
                'Амулет Отражения — при применении накладывает пелену которая, может отразить одно любое магическое заклинание.',
            },
          ],
        },
      },
      subClassThree: {
        subClassName: 'Монах Иллюзий',
        subClassRole:
          '(“Твой кулак не может поразить то, чего не существует.”)',
        level5: {
          ability: [
            {
              isActive: true,
              description: 'Копия — создает одну копию которая бездействует.',
            },
            {
              isActive: false,
              description:
                'Сердце Иллюзии — шанс, что враг промажет по тебе, если рядом копия.',
            },
            {
              isActive: true,
              description:
                'Меняющееся тело — меняешься местами с одной из своих копий.',
            },
          ],
        },
        level10: {
          ability: [
            {
              isActive: true,
              description:
                'Иллюзорный образ — создаёт свою копию, которая повторяет последний боевой приём.',
            },
            {
              isActive: true,
              description:
                'Мираж Шестёрок — временно создаёшь 6 копий, враги не знают, где ты настоящий.',
            },
          ],
        },
        level20: {
          ability: [
            {
              isActive: false,
              description:
                'Маска истины — враги, ударившие копию, временно теряют точность и крит. шанс',
            },
            {
              isActive: false,
              description:
                'Эхо присутствия — пока рядом активна хотя бы одна копия, монах получает бонус к уклонению и скорости передвижения.',
            },
            {
              isActive: true,
              description:
                'Тень-наставник — призывает копию, которая 6 секунд повторяет все действия монаха с небольшой задержкой. Копия имеет доступ ко всем активным способностям (их версии слабее, но функциональны).',
            },
          ],
        },
      },
    },
  },
  {
    path: 'Alchemist',
    class: 'Алхимик',
    role: '',
    icon: '',
    subClasses: {
      subClassOne: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassTwo: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassThree: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
    },
  },
  {
    path: 'Druid',
    class: 'Друид',
    role: '',
    icon: '',
    subClasses: {
      subClassOne: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassTwo: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassThree: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
    },
  },
  {
    path: 'Engineer',
    class: 'Инженер',
    role: '',
    icon: '',
    subClasses: {
      subClassOne: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassTwo: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassThree: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
    },
  },
  {
    path: 'Bard',
    class: 'Бард',
    role: '',
    icon: '',
    subClasses: {
      subClassOne: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassTwo: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
      subClassThree: {
        subClassName: '',
        subClassRole: '',
        level5: {
          ability: [],
        },
        level10: {
          ability: [],
        },
        level20: {
          ability: [],
        },
      },
    },
  },
];

export { dataClass };
export type { ClassProp };
