import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFiatOnrampMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFiatOnrampMdRegularIcon',
  component: LabelPairedFiatOnrampMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedFiatOnrampMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFiatOnrampMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
