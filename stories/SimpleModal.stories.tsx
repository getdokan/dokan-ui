import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import SimpleModal, { SimpleModalProps } from '../src/SimpleModal';

const meta: Meta = {
  title: 'SimpleModal',
  component: SimpleModal,
};

export default meta;

const Template: Story<SimpleModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <SimpleModal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
        <SimpleModal.Header>
          <span>This is a Header</span>
          <div
            className="border-b min-w-full py-2"
            style={{ marginLeft: '-9999px', marginRight: '-9999px' }}
          ></div>
        </SimpleModal.Header>
        <SimpleModal.Body>
          This is a Body Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum unde dignissimos aspernatur minus, ea repellat at
          animi dolorum est laboriosam mollitia incidunt eius debitis culpa
          voluptates eligendi modi nulla hic? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Est, neque adipisci ea maiores nulla ex
          modi explicabo et praesentium repudiandae cum quidem recusandae
          molestiae laborum nostrum molestias culpa corporis dicta. Debitis
          numquam eaque illo eligendi, dolorem error dolor quidem minus,
          praesentium sequi sunt quo! Quibusdam similique placeat dolorem
          tenetur aliquam, autem pariatur corrupti enim officiis illum
          perferendis cupiditate, error, quas quaerat sit deleniti. Aliquid
          dicta officiis temporibus esse ullam aspernatur fuga ut
          exercitationem. Ratione, eum! Iusto illo, eaque labore, quis culpa
          ullam, sapiente vel assumenda eligendi ab optio modi nesciunt alias
          perspiciatis dolorum? Nulla optio possimus necessitatibus repellat
          cumque quo nam. Quisquam voluptas modi ipsa eos et voluptatum
          laboriosam, quasi praesentium necessitatibus velit placeat doloremque
          consequuntur ratione omnis fuga eaque deleniti. Culpa, perspiciatis?
          Culpa vero veritatis esse tempore fuga debitis architecto est
          asperiores ipsum dolore voluptas, alias incidunt distinctio obcaecati
          enim quasi error? Maxime possimus animi rerum sequi commodi amet
          doloremque ipsum, reprehenderit quod laboriosam tenetur numquam veniam
          hic quia optio. Dolore laudantium aspernatur velit? Accusantium
          deserunt, rem repudiandae, unde, ratione ea eligendi quo atque soluta
          adipisci laborum reprehenderit porro obcaecati est dicta cumque in
          officiis vel commodi dolores tenetur dignissimos molestias. Ad nemo
          ipsa amet officiis delectus dicta rerum enim molestias at voluptas
          explicabo harum blanditiis consectetur alias, saepe tenetur facere.
          Maiores, voluptates! Alias enim hic dignissimos expedita temporibus id
          ea officia aperiam animi aliquam quis deserunt minima odit impedit,
          eos ullam vitae laborum qui exercitationem deleniti, omnis similique
          quae optio? Suscipit, temporibus voluptate. Repudiandae at veritatis
          cupiditate ducimus voluptatem eius quam sint sapiente recusandae quis
          sit, nemo, similique velit quibusdam aspernatur a? Mollitia cumque
          neque labore temporibus consectetur sunt sint et! Fugiat repellat
          saepe porro sit numquam incidunt minima asperiores temporibus vero!
          Nemo aperiam placeat eaque architecto autem vitae ratione quae ab. Ex
          libero corporis nihil commodi impedit, ea quos natus pariatur est quae
          reiciendis cum harum omnis nulla! Repellendus, numquam amet?
          Asperiores porro possimus voluptatum non commodi quasi,
          exercitationem, corrupti veniam accusamus nobis harum nostrum tempora
          doloremque cupiditate illum, in perspiciatis cum quia. Voluptas atque
          iste doloribus libero nemo placeat vel possimus explicabo cum, error
          ullam vitae amet quam necessitatibus, deserunt nulla id. Omnis
          corporis reprehenderit explicabo mollitia ad labore pariatur deleniti
          veniam facere, voluptatum numquam beatae corrupti unde? Repellendus
          rem possimus aspernatur architecto voluptatum enim ut. Eveniet
          exercitationem voluptates optio quaerat, alias soluta iusto veritatis
          recusandae necessitatibus reiciendis magni maxime est. Voluptatem
          laborum labore, amet praesentium ullam quia tempore quaerat voluptate
          voluptas doloremque velit maiores magni iusto perspiciatis deserunt
          vitae recusandae tempora reprehenderit blanditiis nisi. Doloribus eum,
          iste magnam ipsa natus beatae veritatis rem recusandae dolore facilis
          cupiditate repellendus ea tenetur, soluta, excepturi quo molestias
          quibusdam enim ducimus? Et consequatur laborum error enim magnam
          soluta, asperiores perferendis, similique aliquam ipsa dolorem
          molestiae! Numquam facilis ex quisquam eius necessitatibus odit vitae
          omnis illo eaque aliquam esse a, quibusdam tempora quas assumenda
          suscipit dolorem officia modi iure libero. Asperiores nisi optio
          facilis laudantium iste in exercitationem illo quaerat ratione
          doloremque, ipsa tempore eum quo harum fuga qui hic ipsam aliquam
          maxime. Ea voluptas corporis aspernatur voluptate, officia dolorem
          sequi odio dolorum consequatur! Commodi quaerat culpa placeat quo ut
          illo sint, sit corporis totam adipisci, dolor laudantium pariatur
          voluptas odio atque nam fugit, aliquid quia consequuntur provident
          quae reprehenderit earum voluptatibus! Ipsa, neque fugit reiciendis
          voluptates magnam in laborum? Adipisci rerum repellat, quis soluta
          fugit nobis obcaecati necessitatibus consequuntur sit ipsam expedita
          mollitia dignissimos? Voluptatem consectetur quae laboriosam laborum
          at rem temporibus velit consequatur nihil animi quaerat maiores earum
          atque excepturi est totam asperiores vero veniam facere debitis cum,
          beatae, explicabo alias! Quis natus enim dolor dolore? Ipsa
          consequatur explicabo corporis eveniet tempora ipsam saepe, culpa quia
          adipisci doloremque animi ullam quod nesciunt minima? Beatae quae
          aliquid dolorem, temporibus officia necessitatibus placeat?
          Dignissimos debitis temporibus fugit blanditiis molestias ullam
          tempora nam doloremque dolor eaque, esse nobis nisi voluptas animi
          molestiae consequatur? Nisi voluptates facere incidunt quidem est non
          expedita, quae unde vero. Ab natus, fugit aperiam voluptate dolorum
          blanditiis aliquid neque illum temporibus, recusandae quidem fuga ut
          omnis maiores perspiciatis dignissimos dolorem mollitia fugiat
          laudantium nam earum. Commodi nam hic vero, fuga fugit repellendus
          quibusdam animi nihil asperiores ipsam, ab adipisci odio aliquam sequi
          possimus quasi maiores rem non quos dicta harum eligendi? Cumque magni
          eos distinctio possimus nobis expedita labore veritatis soluta. Eos
          impedit vitae voluptatum natus, cumque consequuntur eligendi aperiam
          earum mollitia debitis voluptatem quos fuga doloribus commodi sint
          voluptas corporis ab. Aut consectetur inventore dolorem dolor quae
          quam neque, recusandae sapiente veritatis, doloremque sunt, debitis
          praesentium harum excepturi suscipit eum officia saepe eos delectus
          quidem? Accusantium harum earum incidunt minima at ratione nesciunt,
          repudiandae a. Quo, qui labore, consectetur maxime assumenda rerum
          harum ipsum laborum voluptatem quas voluptatibus corrupti. Id iure
          explicabo nobis commodi accusantium quisquam expedita non ducimus
          saepe dignissimos, quos nesciunt atque ea eveniet maxime.
        </SimpleModal.Body>
        <SimpleModal.Footer>
          <div
            className="border-t min-w-full py-2"
            style={{ marginLeft: '-9999px', marginRight: '-9999px' }}
          ></div>
          This is a Footer
        </SimpleModal.Footer>
      </SimpleModal>
    </section>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: '800px',
  height: '80vh',
};
