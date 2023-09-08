import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWhatsappIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWhatsappIcon',
  component: LabelPairedWhatsappIcon,
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
} satisfies Meta<typeof LabelPairedWhatsappIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWhatsappIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
