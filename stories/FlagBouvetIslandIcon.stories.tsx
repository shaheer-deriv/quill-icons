import type { Meta, StoryObj } from '@storybook/react';

import { FlagBouvetIslandIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagBouvetIslandIcon',
  component: FlagBouvetIslandIcon,
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
} satisfies Meta<typeof FlagBouvetIslandIcon>;

export default meta;

type Story = StoryObj<typeof FlagBouvetIslandIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
