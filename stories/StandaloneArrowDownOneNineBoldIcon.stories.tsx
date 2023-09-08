import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownOneNineBoldIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownOneNineBoldIcon',
  component: StandaloneArrowDownOneNineBoldIcon,
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
} satisfies Meta<typeof StandaloneArrowDownOneNineBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownOneNineBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
