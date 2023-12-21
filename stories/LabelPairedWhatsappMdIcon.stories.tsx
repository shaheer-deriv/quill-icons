import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWhatsappMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWhatsappMdIcon',
  component: LabelPairedWhatsappMdIcon,
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
} satisfies Meta<typeof LabelPairedWhatsappMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWhatsappMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
