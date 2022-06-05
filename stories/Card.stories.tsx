import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../src/Card';

const meta: Meta = {
    title: 'Card',
    component: Card,
};

export default meta;

const Template: Story<CardProps> = args => <Card {...args}>
  <Card.Header>
    Article No. #4218
  </Card.Header>
  <Card.Body>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore vero hic et quaerat velit, ab aliquam adipisci tenetur, veritatis iste a facere. Earum, vero nam numquam amet accusamus sunt corrupti!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam natus repudiandae sapiente, animi est, assumenda corporis, officiis veniam similique distinctio esse molestias cum ad dignissimos. Soluta accusamus placeat tempora.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, perferendis consequuntur corporis omnis laborum sit quas reprehenderit? Numquam quibusdam ad reiciendis doloribus illum modi! Dolor voluptatibus in expedita sint distinctio!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi quam optio illo, quo deserunt harum necessitatibus dolorem nobis omnis temporibus iusto ex, quibusdam ipsum. Quae repellat molestiae libero repudiandae!
  </Card.Body>
  <Card.Footer colorClass="bg-gray-100">
    (c) NothingWorks Inc.
  </Card.Footer>
</Card>;

export const Default = Template.bind({});

Default.args = {};
