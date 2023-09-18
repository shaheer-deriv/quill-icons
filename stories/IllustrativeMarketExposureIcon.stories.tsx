import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeMarketExposureIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeMarketExposureIcon',
  component: IllustrativeMarketExposureIcon,
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
} satisfies Meta<typeof IllustrativeMarketExposureIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeMarketExposureIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
