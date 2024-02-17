"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import KanbanColumn from '../_components/kanban/kanban-column'
import { ScrollArea } from '@radix-ui/react-scroll-area'

const KanbanPage = ({params}: {params: { workspaceId: string }}) => {

    const [cards, setCards] = useState(DEFAULT_CARDS);


  return (
    <ScrollArea className='h-full bg-red-800 w-full pr-10 '>
        <div className='h-full w-full'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro explicabo, consequuntur assumenda beatae fugit ducimus excepturi nemo quos sint magnam. Atque sint, sequi tenetur quo exercitationem dolorum aut obcaecati provident aliquid at debitis aperiam facere laudantium dolorem porro doloribus fuga itaque nisi blanditiis ut odio ducimus? Voluptate temporibus quisquam ad placeat. Corrupti neque laboriosam officia voluptatibus exercitationem, consequuntur aspernatur illum maiores debitis, rerum, dicta numquam quos dolor expedita sapiente soluta earum. Placeat eveniet fugiat repellendus sed, sapiente architecto ipsum quia optio accusantium et tenetur cupiditate nam deleniti molestias culpa rem amet. Cupiditate rem accusantium, laboriosam sunt natus doloribus magni reprehenderit commodi. Beatae iure perspiciatis ratione adipisci! Repellendus natus possimus architecto, error totam minima reprehenderit sapiente et incidunt expedita quibusdam est debitis, animi cum! Laboriosam temporibus veritatis sint voluptates nemo? Unde eaque asperiores iusto repudiandae nulla suscipit obcaecati, minima sapiente, a quis recusandae dicta exercitationem quo. Nesciunt nam nulla repellat tenetur? Nam officia corrupti nobis reiciendis, maiores libero veritatis, aut dolore modi aperiam ipsum nostrum obcaecati porro. Deserunt eligendi veniam quae aliquid iusto debitis, sunt autem itaque voluptas neque nemo odit maiores mollitia error obcaecati non optio ipsum, totam laboriosam laborum. Animi, aliquam. Distinctio voluptas libero atque saepe eum, obcaecati sed quod, fuga ipsam vero corrupti repellat mollitia aut vel fugit id beatae similique ullam quia ipsum explicabo praesentium facere odio omnis? Modi, quam necessitatibus mollitia molestiae eveniet voluptatum perspiciatis ab, beatae, laborum commodi at! Distinctio deserunt excepturi, quia architecto minus reprehenderit ipsa culpa recusandae, assumenda dolorum quis laboriosam vel ducimus, a iure tempore sequi! Laudantium eligendi voluptas laborum ipsam. Dolorem et deleniti animi reiciendis voluptatibus delectus nesciunt iusto illo possimus earum repudiandae, enim ipsum consectetur, sint adipisci commodi facere? Ipsa quas voluptatibus debitis dolores assumenda in quo soluta tenetur facere corporis, libero, aspernatur distinctio omnis praesentium! Ipsa repellat obcaecati dolorum minus excepturi sed consequatur! Libero similique dolores laborum autem hic, sapiente aperiam ex perspiciatis voluptatibus quaerat repudiandae, eos alias modi voluptas? Sunt deleniti eius quae voluptatem est iure qui quo facere consequatur deserunt, voluptas ipsam provident temporibus! Sunt, iusto repellat, repudiandae nam dignissimos ea dolore pariatur ratione rerum qui consectetur earum quo, at deserunt nemo dolorem? Ducimus dolorem impedit temporibus eum vitae exercitationem corrupti. Magnam assumenda autem corporis incidunt ratione, ut quisquam voluptatum. Cupiditate maxime tempore ad consectetur ipsum facere nobis consequuntur ducimus perferendis! Ipsa perferendis perspiciatis distinctio possimus, nostrum aperiam alias voluptatem maxime laudantium praesentium porro similique molestiae pariatur architecto eaque quasi dicta! Alias quas tempore maxime, a laborum eum sit iure odio at cumque vel doloremque perspiciatis et ratione impedit nostrum sint aliquam neque tempora commodi repellat aliquid enim ducimus. Exercitationem error id voluptas, molestias a maxime corporis deserunt rem explicabo expedita praesentium laudantium aut quidem unde odio provident asperiores. Praesentium reprehenderit vitae temporibus dolores cum facere a, officia aspernatur dolorem sequi magni ipsam doloremque mollitia voluptates. Labore et quis unde quidem fuga ipsam beatae non enim tempore atque deserunt quo esse quae mollitia suscipit minima totam, sed id omnis vero consequatur libero delectus ullam molestias! Veniam quod officiis rerum natus illo asperiores aut repellendus voluptas quidem porro, eos, modi nulla vero maxime reiciendis a, dolorem amet praesentium ducimus ab cupiditate vel! Quas libero minima quo quaerat praesentium architecto. Exercitationem, veniam quisquam cupiditate velit, doloribus explicabo tenetur recusandae aliquam harum ipsum consequatur sunt est omnis necessitatibus dolore neque laudantium eaque, amet ipsa? Quod, cum sint in nesciunt et perferendis, neque reiciendis nemo eveniet hic aspernatur nostrum ad quo harum maxime voluptatum quam facilis unde quas minima? Modi adipisci amet ea, quos quaerat enim quas veniam, voluptatum, corporis excepturi nostrum animi eaque. Facere cum, quibusdam fuga obcaecati tempora voluptates repellendus sit, excepturi, voluptate iste incidunt! In, provident perferendis unde magni maxime nulla illo ipsam voluptate officiis pariatur id eos iure eveniet placeat veniam itaque excepturi quos. Blanditiis vitae rerum perspiciatis? Nostrum officiis mollitia, provident, quaerat ullam quisquam itaque expedita nulla at deleniti ea tempore reprehenderit similique consectetur omnis earum soluta amet velit ducimus eligendi? Libero, nobis aliquam! Possimus, iste earum enim rerum tempore nam, non suscipit ratione, error totam saepe ab delectus omnis similique distinctio quis voluptatem veniam voluptatibus tenetur dicta quia! Tempora nisi laudantium corrupti cupiditate ab aliquam, quia illum veniam. Dolor optio culpa excepturi blanditiis voluptatibus. At iste rem recusandae deserunt dolorum quo qui. Omnis, maxime corporis quasi unde quos, repudiandae, aspernatur esse cupiditate modi dolorem facilis quisquam natus voluptatum quidem vitae error quis ratione tempora a adipisci quo beatae. Aperiam deserunt magni, praesentium culpa provident temporibus dolorem dolor illum minima dignissimos impedit rerum exercitationem eum et eius nobis. Consequatur cupiditate voluptas repellendus quibusdam tempore quidem explicabo blanditiis voluptates, asperiores minima libero at id facilis iusto dolor fuga sapiente. Numquam sunt accusamus, autem aspernatur nemo non, doloribus id voluptate pariatur at commodi eveniet facere explicabo doloremque et asperiores. Necessitatibus eaque deserunt, sunt modi molestias reprehenderit, rem dicta, vitae expedita incidunt sed! Illum amet impedit debitis minima omnis blanditiis. Neque nesciunt minima odit totam consequuntur dignissimos, esse officiis et, deserunt inventore est quis perspiciatis quam soluta, deleniti eligendi eaque! Aut quisquam quos consequuntur reiciendis laborum ut facere incidunt fuga officia aperiam facilis quia asperiores eos ex nesciunt repellendus aliquid cumque saepe quam harum ea vitae assumenda, sapiente quis! Sunt, atque iusto illo qui doloremque ad quo omnis quisquam modi natus incidunt dolorum, reiciendis, minus quos laborum hic eligendi eum at accusantium optio mollitia dolorem. Odit sunt commodi, repellendus ut, voluptate quidem alias porro reprehenderit culpa ex, molestiae optio quam tenetur dolorum reiciendis inventore ullam iste. Natus, dolor? Hic sequi provident aliquid minima mollitia possimus voluptatibus veniam, at ex consectetur eius natus quibusdam corrupti, fugit quas consequuntur voluptates? Reiciendis, quidem. Molestiae facere obcaecati et ullam incidunt quaerat unde distinctio error, dolores fugit aliquam neque molestias dignissimos ad magni soluta accusantium nihil eaque omnis similique quidem voluptatem! Quisquam placeat, iste architecto impedit, consequuntur recusandae qui quo ipsum distinctio at quam exercitationem facere ut quod est eum vitae accusamus consequatur? Odio iste, eveniet exercitationem, dolorum similique error aliquid, doloremque nihil eos expedita nemo dolores deleniti amet tempore labore at vitae.</h1>
        </div>
    </ScrollArea>
  )
}

export default KanbanPage



const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
    { title: "SOX compliance checklist", id: "2", column: "backlog" },
    { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
    { title: "Document Notifications service", id: "4", column: "backlog" },
    // TODO
    {
      title: "Research DB options for new microservice",
      id: "5",
      column: "todo",
    },
    { title: "Postmortem for outage", id: "6", column: "todo" },
    { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  
    // DOING
    {
      title: "Refactor context providers to use Zustand",
      id: "8",
      column: "doing",
    },
    { title: "Add logging to daily CRON", id: "9", column: "doing" },
    // DONE
    {
      title: "Set up DD dashboards for Lambda listener",
      id: "10",
      column: "done",
    },
  ];