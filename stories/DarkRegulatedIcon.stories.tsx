import type { Meta, StoryObj } from '@storybook/react';

import { DarkRegulatedIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkRegulatedIcon',
  component: DarkRegulatedIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkRegulatedIcon>;

export default meta;

type Story = StoryObj<typeof DarkRegulatedIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
