import type { Meta, StoryObj } from '@storybook/react';

import { LightFreeFromRealWorldRisksIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightFreeFromRealWorldRisksIcon',
  component: LightFreeFromRealWorldRisksIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightFreeFromRealWorldRisksIcon>;

export default meta;

type Story = StoryObj<typeof LightFreeFromRealWorldRisksIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
