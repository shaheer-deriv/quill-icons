import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativePartnershipIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativePartnershipIcon',
  component: IllustrativePartnershipIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativePartnershipIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativePartnershipIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
